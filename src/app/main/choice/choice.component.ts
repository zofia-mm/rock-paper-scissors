import { Component, Input } from "@angular/core";
import { Handsign } from "../handsign/handsign.component";

@Component({
    selector: 'choice',
    templateUrl: './choice.component.html',
    styleUrls: [ './choice.component.scss' ]
    })
export class ChoiceComponent
{
    Handsign = Handsign;
    
    @Input() onChoice : ()=>void = () => {};
}