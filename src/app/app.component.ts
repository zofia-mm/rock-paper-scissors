import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app-layout.component.scss']
    })
export class AppComponent
{
    MainScreenStates = MainScreenStates;
    main_screen : MainScreenStates = MainScreenStates.Choice;

    onChoice = () => {
        this.main_screen = MainScreenStates.Match
        console.log( this.main_screen == MainScreenStates.Match )
        }
}

enum MainScreenStates { Choice, Match }
