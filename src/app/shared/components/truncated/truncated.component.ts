import { Component, Input, ElementRef, OnChanges} from '@angular/core';

/**
 * Displays truncated text with a full text in title attribute or after double click
 * Usage:
 * <app-truncated [text]="variableName" [limit]="123" [completeWords]=true suffix=">>>" ></app-truncated>
 */

@Component({
    selector: 'app-truncated',
    styleUrls: ['./truncated.component.scss'],
    template: `
        <span [ngClass]="currentClass"
             [innerHTML]="currentText"
             [attr.title]="currentText.length !== text.length ? text : null"
             (dblclick)="toggleView()">
        </span>
  `
})

export class TruncatedComponent implements OnChanges {
    @Input() text: string;
    @Input() limit = 125;
    @Input() completeWords = true;
    @Input() suffix = '…';
    currentText: string;
    currentClass: 'truncated' | 'full';

    public isCollapsed = true;

    constructor(private elementRef: ElementRef) {
    }

    toggleView() {
        this.isCollapsed = !this.isCollapsed;
        this.determineView();
    }

    truncate(value: string, limit = 25, completeWords = false, suffix = '…') {
        if (!value || !value.length) {
            return value;
        }
        if (completeWords) {
            if (value.length > limit) {
                limit = value.substr(0, limit).lastIndexOf(' ');
            }
        }
        return value.length > limit ? value.substr(0, limit) + suffix : value;
    }

    determineView() {
        if (this.isCollapsed) {
            this.currentText = this.truncate(this.text, this.limit, this.completeWords, this.suffix);
        } else {
            this.currentText = this.text;
        }
        this.currentClass = this.currentText == this.text ? 'full' : 'truncated';
    }

    ngOnChanges() {
        this.determineView();
    }
}
