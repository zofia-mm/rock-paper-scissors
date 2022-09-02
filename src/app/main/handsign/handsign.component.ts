import { Component, Input } from "@angular/core";

@Component({
    selector: 'handsign',
    templateUrl: './handsign.component.html',
    styleUrls: [
        './handsign.component.scss'
        ]
    })
export class HandsignComponent
{
    Handsign = Handsign;
    @Input() handsign : Handsign = Handsign.Rock;
}

export enum Handsign
{
    Rock = "rock",
    Paper = "paper",
    Scissors = "scissors",
    Lizard = "lizard",
    Spock = "spock"
}