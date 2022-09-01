import { Component, Input } from "@angular/core";

@Component({
    selector: 'header-content',
    templateUrl: './header.component.html',
    styleUrls: [
        './header-color.component.scss',
        './header-typography.component.scss',
        './header-layout.component.scss'
        ]
    })
export class HeaderComponent
{
    @Input() score : string = "";
}