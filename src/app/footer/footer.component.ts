import { Component, Input } from "@angular/core";

@Component({
    selector: 'footer-content',
    templateUrl: './footer.component.html',
    styleUrls: [
        './footer-colors.component.scss',
        './footer-typography.component.scss',
        './footer-layout.component.scss'
        ]
    })
export class FooterComponent
{
    @Input() onRulesClick : () => void = () => {};
}