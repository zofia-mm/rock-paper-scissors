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

    onChoice = (handsign : Handsign) => {
        this.main_screen = MainScreenStates.Match
        this.player_handsign = handsign;
        console.log( handsign );
        }
}

enum MainScreenStates { Choice, Match }
