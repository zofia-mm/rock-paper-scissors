import { Component, Input } from "@angular/core";

@Component({
    selector: 'choice',
    templateUrl: './choice.component.html',
    styleUrls: [
        './choice-layout.component.scss'
        ]
    })
export class ChoiceComponent
{
    @Input() onChoice : ()=>void = () => {};
}