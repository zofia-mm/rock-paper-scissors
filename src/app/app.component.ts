import { Component } from '@angular/core';
import { Handsign } from './main/handsign/handsign.component';
import { CookieService } from 'ngx-cookie-service';
import { trigger } from '@angular/animations';
import { expandBelowAnimation, expandInbetweenAnimation, ResultAnimationState } from "./main/match/match-animation.component";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app-layout.component.scss'],
    animations: [
        trigger( 'resultBetweenAnimation', expandInbetweenAnimation ),
        trigger( 'resultBelowAnimation', expandBelowAnimation )
        ]
    })
export class AppComponent
{
    /* modal */

    isRulesModalVisible : boolean = false;
    onRulesClick = () =>
        { this.isRulesModalVisible = true; }
    onRulesClose = () =>
        { this.isRulesModalVisible = false; }

    /* cookie */

    scoreCookieKey = 'score'
    constructor( private cookieService: CookieService ) { }
    ngOnInit(): void
    {
        this.score = +this.cookieService.get( this.scoreCookieKey );
    }

    /* game */

    MainScreenStates = MainScreenStates;
    main_screen : MainScreenStates = MainScreenStates.Choice;

    player_handsign : Handsign = Handsign.Rock;
    house_handsign : Handsign = Handsign.Rock; 
    onChoice = (handsign : Handsign) =>
    {
        this.main_screen = MainScreenStates.Match
        this.player_handsign = handsign;

        setTimeout(() => { this.onHousePicked() }, 500);
    }

    has_house_picked : boolean = false;
    has_match_ended : boolean = false;
    match_result_text : string = "YOU WIN";
    score = 0;
    onHousePicked = () =>
    {
        this.house_handsign = Object.values( Handsign )
            [Math.floor(Math.random() * Object.values( Handsign ).length )];
        this.has_house_picked = true;
        setTimeout(() => { this.onMatchEnd() }, 500);
    }

    resultBetweenAnimationStatus = ResultAnimationState.Start;
    resultBelowAnimationStatus = ResultAnimationState.Start;
    playerWon = false;
    onMatchEnd = () =>
    {
        this.calculateMatchResult();
        this.has_match_ended = true;
        this.cookieService.set( this.scoreCookieKey, this.score.toString() );
        this.resultBetweenAnimationStatus = ResultAnimationState.End;
        this.resultBelowAnimationStatus = ResultAnimationState.End;
    }
    calculateMatchResult = () =>
    {
        if( this.player_handsign == this.house_handsign )
        {
            this.match_result_text = "You Draw";
            return;
        }

        if( winningPairs.get( this.player_handsign )?.includes( this.house_handsign ) )
        {
            this.match_result_text = "You Win";
            this.score += 1;
            this.playerWon = true;
        }
        else
        {
            this.match_result_text = "You Lose";
            this.score -= 1;
            this.playerWon = false;
        }
    }

    onPlayAgain = () =>
    {
        this.main_screen = MainScreenStates.Choice;
        this.has_house_picked = false;
        this.has_match_ended = false;
        this.resultBetweenAnimationStatus = ResultAnimationState.Start;
        this.resultBelowAnimationStatus = ResultAnimationState.Start;    
    }
}

enum MainScreenStates { Choice, Match }

let winningPairs = new Map<Handsign, Array<Handsign>>([
    [ Handsign.Rock, [Handsign.Lizard, Handsign.Scissors] ],
    [ Handsign.Paper, [Handsign.Rock, Handsign.Spock] ],
    [ Handsign.Scissors, [Handsign.Paper, Handsign.Lizard] ],
    [ Handsign.Lizard, [Handsign.Paper, Handsign.Spock] ],
    [ Handsign.Spock, [Handsign.Scissors, Handsign.Rock] ],
    ]);