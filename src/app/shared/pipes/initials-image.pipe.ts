/**
 * This pipe generates avatars with initials based on provided string
 * e.g.
 * - "Tom pe" => TP
 * - "Tom von Pe" => TP
 * - "Tom Von Pe" => TV
 *
 * @param number limit Maximum initials length (default 3)
 * @param number size Image size (default 64)
 * The color depends on the characters in source strings
 * Black font is used for dark background colors
 * White is used for light backgrounds
 *
 * Dependencies:
 * - string-to-color library https://github.com/Gustu/string-to-color
 * - ui-avatars.com web service
 */

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'appInitialsImage'
})
export class InitialsImagePipe implements PipeTransform {

    transform(value: any, ...args: any[]): any {
        if (!value || typeof value !== 'string' || !value.length) {
            return value;
        }

        // ucfirst
        value = value.charAt(0).toUpperCase() + value.slice(1);

        let limit = 3;
        let size = 64;
        if (args && args.length) {
            limit = args[0];
            if (args[1]) {
                size = args[1];
            }
        }

        // using string to color library: https://github.com/Gustu/string-to-color
        const generate = require('string-to-color');
        const hexColor = generate(value).slice(1);

        // although we could, we're not providing the whole string to the service
        // for privacy reasons
        const initials = this.getInitials(value, limit);

        let color = '&color=333';
        if (this.isDark(hexColor)) {
            // this is a dark color
            // if (hsp > 127.5) {
            color = '&color=fff';
        }

        const background = '&background=' + hexColor;

        const serviceUrl = 'https://ui-avatars.com/api/';
        // or european server:
        // const serviceUrl = 'https://eu,ui-avatars.com/api/';

        const length = '?length=' + limit;
        const name = '&name=' + encodeURIComponent(initials);
        const rounded = '&rounded=true';
        const bold = '&bold=true';
        const sizeStr = '&size=' + size.toString();
        const url = serviceUrl + length + name + background + color + rounded + bold + sizeStr;

        return url;
    }

    getInitials(value, limit) {
        const parts = value.split(' ').filter((currValue, arr, index) => currValue);
        let initials = '';
        let c = 0;
        let d = 0;
        for (const part of parts) {
            if (d > limit) {
                break;
            }
            const firstChar = part.charAt(0);
            if (firstChar === firstChar.toUpperCase()
        || c === limit
        || d === 1 && parts.length === 2) { // skip lowercase words inside, eg. Tom von Pe
                initials += firstChar;
                d++;
            }
            c++;
        }

        return initials.toUpperCase();
    }

    isDark(hexColor) {
        const r = parseInt(hexColor.substr(0, 2), 16);
        const g = parseInt(hexColor.substr(2, 2), 16);
        const b = parseInt(hexColor.substr(4, 2), 16);

        // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
        const hsp = Math.sqrt(
            0.299 * (r * r) +
      0.587 * (g * g) +
      0.114 * (b * b)
        );

        return hsp < 150;
    }
}
