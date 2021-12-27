import { Directive, EventEmitter, HostListener, Output } from '@angular/core';
import { interval, Observable, Subject } from 'rxjs';
import { filter, map, takeUntil, tap } from 'rxjs/operators';

@Directive({
    selector: '[appHoldable]'
})
export class HoldableDirective {
    @Output() holdTime: EventEmitter<number> = new EventEmitter();

    state: Subject<string> = new Subject();

    cancel: Observable<string>;

    constructor() {
        this.cancel = this.state.pipe(
            filter(value => value === 'cancel'),
            tap(value => {
                // console.log('%c stopped hold', 'color: #ec6969; font-weight: bold');
                this.holdTime.emit(0);
            }),
        );
    }

    @HostListener('mouseup', ['$event'])
    @HostListener('mouseleave', ['$event'])
    onExit() {
        this.state.next('cancel');
    }

    @HostListener('mousedown', ['$event'])
    onHold() {
    // console.log('%c started hold', 'color: #5fba7d; font-weight: bold');
        this.state.next('start');

        const n = 100;

        interval(n).pipe(
            takeUntil(this.cancel),
            // tap( value => console.log(value * n)),
            tap(value => this.holdTime.emit(value * n))
        ).subscribe();
    }

}
