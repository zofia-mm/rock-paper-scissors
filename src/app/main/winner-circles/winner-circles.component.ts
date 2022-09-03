import { trigger } from "@angular/animations";
import { Component } from "@angular/core";
import { circleAnimation, CircleState } from "./winner-circles-animation.component";

@Component({
    selector: 'winner-circles',
    templateUrl: './winner-circles.component.html',
    styleUrls: [ './winner-circles.component.scss' ],
    animations: [ circleAnimation ]
    })
export class WinnerCirclesComponent
{
    animationState : CircleState = CircleState.Contracted;

    onAnimationDone = () =>
    {
        if( this.animationState === CircleState.Contracted )
            { this.animationState = CircleState.Expanded; } else
            { this.animationState = CircleState.Contracted; }
    }
}