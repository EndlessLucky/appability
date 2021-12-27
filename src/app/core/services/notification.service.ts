import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { publish, refCount } from 'rxjs/operators';
import { NotificationModel, NotificationModelInterface } from '../models/notification.model';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {

    private notification: BehaviorSubject<NotificationModelInterface> = new BehaviorSubject(null);
    readonly notification$: Observable<NotificationModelInterface> = this.notification.asObservable().pipe(publish(), refCount());

    notify(message) {
        this.info(message);
    }

    /**
     * Send warning message
     */
    warn(message, duration = 4000, options = null) {
        const model = new NotificationModel(message, 'notification-warn', duration, options);
        this.notification.next(model);
    }

    /**
     * Alias for warn method
     */
    error(message, duration = 4000, options = null) {
        this.warn(message, duration, options);
    }

    /**
     * Send information message
     */
    info(message, duration = 4000, options = null) {
        const model = new NotificationModel(message, 'notification-info', duration, options);
        this.notification.next(model);
    }

    /**
     * Send success message
     */
    success(message, duration = 4000, options = null) {
        const model = new NotificationModel(message, 'notification-success', duration, options);
        this.notification.next(model);
    }
}
