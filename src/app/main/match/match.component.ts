import { Component, Input } from "@angular/core";
import { Handsign } from "../handsign/handsign.component";
import { trigger, style, animate, transition, state,
    group, query, animateChild, keyframes } from '@angular/animations';
import { expandBelowAnimation, expandInbetweenAnimation, ResultAnimationState } from "./match-animations.component";

@Component({
    selector: 'match',
    templateUrl: './match.component.html',
    styleUrls: [
        './match-layout.component.scss',
        './match-typography.component.scss'
        ],
    animations: [
        trigger( 'resultBetweenAnimation', expandInbetweenAnimation ),
        trigger( 'resultBelowAnimation', expandBelowAnimation )
        ]
    })
export class MatchComponent
{
    Handsign = Handsign;
    @Input() player_handsign = Handsign.Rock;
    @Input() house_handsign = Handsign.Rock;

    @Input() did_win : boolean = false;
    @Input() has_house_picked : boolean = false;
    @Input() has_match_ended : boolean = false;

    @Input() match_result_text = "You Win";
    @Input() onPlayAgain : ()=>void = ()=>{};

    @Input() resultBetweenAnimationStatus : ResultAnimationState = ResultAnimationState.Start;
    @Input() resultBelowAnimationStatus : ResultAnimationState = ResultAnimationState.Start;
}
