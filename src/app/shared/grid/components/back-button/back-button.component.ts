import { Location } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-back-button',
    templateUrl: './back-button.component.html',
    styleUrls: ['./back-button.component.scss']
})
export class BackButtonComponent {
    @Input()color: string;
    @Input()label = null;
    @Input()title = 'Go back';

    constructor(private location: Location) { }

    goBack() {
        this.location.back();
    }

    goForward() {
        this.location.forward();
    }
}
