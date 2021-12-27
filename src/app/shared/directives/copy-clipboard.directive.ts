import { Directive, Input, Output, EventEmitter, HostListener } from '@angular/core';

// Copies data to the clipboard

// Example usage:
//
//  <a role="button" [copy-clipboard]="'some stuff'" (copied)="notify($event)">
//  <i class="fa fa-clipboard"></i>
//  Copy
//  </a>
//
//  public notify(payload: string) {
//    // Might want to notify the user that something has been pushed to the clipboard
//    console.info(`'${payload}' has been copied to clipboard`);
// }

@Directive({ selector: '[appCopyClipboard]' })
export class CopyClipboardDirective {

    @Input('appCopyClipboard')
    public payload: string;

    @Input('context')
    public context: string;

    @Output('copied')
    public copied: EventEmitter<string> = new EventEmitter<string>();

    @HostListener('click', ['$event'])
    public onClick(event: MouseEvent): void {
        event.preventDefault();
        if (!this.payload) {
            return;
        }

        const listener = (e: ClipboardEvent) => {
            const clipboard = e.clipboardData || (window as any).clipboardData;
            clipboard.setData('text', this.payload.toString());
            e.preventDefault();
            this.copied.emit(this.payload);
        };

        document.addEventListener('copy', listener, false);
        document.execCommand('copy');
        document.removeEventListener('copy', listener, false);
    }
}

