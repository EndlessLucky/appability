import { Pipe, PipeTransform } from '@angular/core';

/**
 * Converts camel case text to words
 * Usage: <i>{{text | appTruncate:30:true:'...'}}</i>
 */

@Pipe({
    name: 'appWordize'
})
export class WordizePipe implements PipeTransform {
    transform(value: string, limit = 25, completeWords = false, ellipsis = '…') {
        if (!value || !value.length) {
            return value;
        }

        return value
        // insert a space before all caps
            .replace(/([A-Z])/g, ' $1')
        // uppercase the first character
            .replace(/^./, function(str){
                return str.toUpperCase(); 
            });
    }
}
