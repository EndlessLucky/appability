import { Injectable } from '@angular/core';

/**
 * Persists partial form values in local storage
 */

@Injectable({
    providedIn: 'root',
})
export class FormStateService {
    public enabled = true;

    generateKey(componentName: string, url: string): string {
        return 'formValues:' + componentName + ':' + url;
    }

    saveValues(values, componentName, url) {
        if (this.enabled) {
            const key = this.generateKey(componentName, url);
            if(url.includes('/create')) this.setBugValue(values);
            localStorage.setItem(key, JSON.stringify(values));
        }
    }

    getValues(componentName, url, defaults = null) {
        if (this.enabled) {
            const key = this.generateKey(componentName, url);
            const values = localStorage.getItem(key);
            if(url.includes('/feature-request')) this.getBugValue();
            return values ? JSON.parse(values) : defaults;
        } else {
            return defaults;
        }
    }

    deleteValues(componentName, url) {
        if (this.enabled) {
            const key = this.generateKey(componentName, url);
            return localStorage.removeItem(key);
        }
    }

    setBugValue(bug) {
        localStorage.setItem('bug',JSON.stringify(bug,undefined, 2));
    }

    getBugValue() {
        return localStorage.getItem('bug');
    }
}
