import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ChoiceComponent } from './main/choice/choice.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MatchComponent } from './main/match/match.component';
import { HandsignComponent } from './main/handsign/handsign.component';
import { WinnerCirclesComponent } from './main/winner-circles/winner-circles.component';
import { RulesModalComponent } from './rules-modal/rules-modal.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ChoiceComponent,
    MatchComponent,
    HandsignComponent,
    WinnerCirclesComponent,
    RulesModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
