import { Component } from '@angular/core';
import { Handsign } from './main/handsign/handsign.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app-layout.component.scss']
    })
export class AppComponent
{
    MainScreenStates = MainScreenStates;
    main_screen : MainScreenStates = MainScreenStates.Choice;

    player_handsign : Handsign = Handsign.Rock;
    house_handsign : Handsign = Handsign.Rock; 
    onChoice = (handsign : Handsign) =>
    {
        this.main_screen = MainScreenStates.Match
        this.player_handsign = handsign;

        setTimeout(() => { this.onHousePicked() }, 1000);
    }

    has_house_picked : boolean = false;
    has_match_ended : boolean = false;
    match_result_text : string = "";
    score = 0;
    onHousePicked = () =>
    {
        this.house_handsign = Object.values( Handsign )
            [Math.floor(Math.random() * Object.values( Handsign ).length )];
        this.has_house_picked = true;
        this.calculateMatchResult();
        this.has_match_ended = true;
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
        }
        else
        {
            this.match_result_text = "You Lose";
            this.score -= 1;
        }
    }

    onPlayAgain = () =>
    {
        this.main_screen = MainScreenStates.Choice;
        this.has_house_picked = false;
        this.has_match_ended = false;
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