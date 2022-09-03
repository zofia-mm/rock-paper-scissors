import { Component, Input } from "@angular/core";

@Component({
    selector: 'rules-modal',
    templateUrl: './rules-modal.component.html',
    styleUrls: [ './rules-modal.component.scss' ]
    })
export class RulesModalComponent
{
    @Input() onCloseClick : () => void = () => {}; 
}