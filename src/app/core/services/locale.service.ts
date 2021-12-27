import { Injectable } from '@angular/core';

/**
 * Used to set Angular material locale (eg. used in DatePickers)
 *
 * @see grid.module.ts for provider setup
 */

@Injectable({
    providedIn: 'root'
})
export class LocaleService {
    protected autodetect = true;

    // default values
    locale = 'en-US';
    country = 'en';
    language = 'US';

    getAutodetect(): boolean {
        return this.autodetect;
    }

    setAutodetect(value: boolean) {
        this.autodetect = value;
    }

    constructor() {
        if (this.autodetect) {
            this.detect();
        }
    }

    detect() {
        this.locale = navigator.language;
        const localeParts = this.locale.split('-');
        this.country = localeParts[0];
        this.language = localeParts[1];
    }
}
