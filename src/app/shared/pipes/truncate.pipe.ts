import { Pipe, PipeTransform } from '@angular/core';

/**
 * Truncates text
 * Usage: <i>{{text | appTruncate:30:true:'...'}}</i>
 */

@Pipe({
    name: 'appTruncate'
})
export class TruncatePipe implements PipeTransform {
    transform(value: string, limit = 25, completeWords = false, ellipsis = '…') {
        if (!value || !value.length) {
            return value;
        }
        if (completeWords) {
            limit = value.substr(0, limit).lastIndexOf(' ');
        }
        return value.length > limit ? value.substr(0, limit) + ellipsis : value;
    }
}
