import { Component, Input } from "@angular/core";
import { Handsign } from "../handsign/handsign.component";

@Component({
    selector: 'match',
    templateUrl: './match.component.html',
    styleUrls: [
        './match-layout.component.scss',
        './match-typography.component.scss'
        ]
    })
export class MatchComponent
{
    Handsign = Handsign;
    @Input() player_handsign = Handsign.Rock;

    @Input() did_win : boolean = false;
    @Input() house_picked : boolean = true;
    @Input() match_ended : boolean = true;

    result_text = "You Win";
}

/*
You Win
You Lose
*/