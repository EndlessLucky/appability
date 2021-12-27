import { Component, OnDestroy, OnInit } from '@angular/core';
import { NotificationModelInterface } from '../../models/notification.model';
import { NotificationService } from '../../services/notification.service';
import { filter, skip } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
    selector: 'app-snackbar',
    template: '',
    styleUrls: ['./snackbar.component.scss']
})
export class SnackbarComponent implements OnInit, OnDestroy {

    subscription: Subscription;

    constructor(private notifications: NotificationService, private snackbar: MatSnackBar) {
    }

    ngOnInit() : void {
        this.subscription = this.notifications.notification$.pipe(
            skip(1), // skip the first subscription, which has empty message
            filter(msg => msg.message !== null), // don't display empty messages
        ).subscribe(msg => this.showToaster(msg));
    }

    /**
     * Use material MatSnackbar to display messages
     *
     * @param string msg
     */
    showToaster(msg: NotificationModelInterface) : void {
        this.snackbar.open(msg.message, null, {
            duration: msg.duration,
            panelClass: [msg.className]
        });
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}
