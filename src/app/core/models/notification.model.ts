/**
 * Message models used in NotificationService
 */

export interface NotificationModelInterface {
    message: string;
    className: string;
    duration: number;
    options: any;
}

export class NotificationModel implements NotificationModelInterface {
    message = null;
    className = 'notification-info';
    options = {};
    duration = 4000;

    constructor(message = null, className = 'notification-info', duration = 4000, options = {}) {
        this.message = message;
        this.className = className;
        this.options = options;
        this.duration = duration;
    }
}
