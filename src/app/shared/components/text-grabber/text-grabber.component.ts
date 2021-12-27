import { Component, ViewContainerRef } from '@angular/core';
import { AuthenticationService } from '../../../core/services/authentication.service';

@Component({
    selector: 'app-text-grabber',
    templateUrl: './text-grabber.component.html',
    styleUrls: ['./text-grabber.component.scss']
    // changeDetection: ChangeDetectionStrategy.OnPush
})

export class TextGrabberComponent {

    constructor(private viewContainer: ViewContainerRef) {
    }

    getUser() {
    // if (this.authenticationService.currentUserValue) {
    //   return this.authenticationService.currentUserValue;
    // }

        return false;
    }

}
