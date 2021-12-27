import { AfterViewInit, Component, forwardRef, Input, OnDestroy, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

export interface NameValue {
    name: string;
    value: string;
}

@Component({
    selector: 'app-grid-select-search',
    templateUrl: './grid-select-search.component.html',
    styleUrls: ['./grid-select-search.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => GridSelectSearchComponent),
            multi: true
        }
    ]
})
export class GridSelectSearchComponent extends FormControl implements OnInit, AfterViewInit, OnDestroy, OnChanges {
    debug = false;

    /**
     * List of available options (objects or strings)
     *
     * @see toLabel()
     * @see toValue()
     * @todo Define values in child class
     */
    protected options: any[] = [];

    value = null;

    @Input() placeholder = '';
    @Input() label = 'NDIS Plan Managed';

    @Input() initial_funds : any;

    /**
     * Whether the form control value should be the whole object or just a value property
     */
    returnObject = true;

    /** control for the selected option */
    @Input() formControl: FormControl = new FormControl();

    /** control for the MatSelect filter keyword */
    public optionsFilterCtrl: FormControl = new FormControl();

    /** list of options filtered by search keyword */
    public filteredOptions: ReplaySubject<any[]> = new ReplaySubject<any[]>(1);

    /** list of options filtered by search keyword for multi-selection */
    // public filteredoptionsMulti: ReplaySubject<ReferralFormRole[]> = new ReplaySubject<ReferralFormRole[]>(1);

    @ViewChild('singleSelect', {static: false}) singleSelect: MatSelect = null;

    /** Subject that emits when the component has been destroyed. */
    // tslint:disable-next-line:variable-name
    private _onDestroy = new Subject<void>();

    onTouched: any = (_: any) => {
        //do nothing
    };

    constructor(){
        super();
    }

    ngOnInit() {
    // set initial selection
    // this.optionCtrl.setValue(this.options[10]);
    // load the initial option list
        this.filteredOptions.next(this.options.slice());
        // this.filteredoptionsMulti.next(this.options.slice());

        // listen for search field value changes
        this.optionsFilterCtrl.valueChanges
            .pipe(takeUntil(this._onDestroy))
            .subscribe(() => {
                this.filterOptions();
            });

        if (this.label) {
            this.placeholder = this.label;
        }
    }

    ngOnChanges() {
        if(this.initial_funds) {
            const initial : string = this.initial_funds;
            if (initial.includes('NDIS Plan Managed')) {
                this.singleSelect.value = 'NDIS Plan Managed';
            }
            else if (initial.includes('NDIS Managed')) {
                this.singleSelect.value = 'NDIS Managed';
            }
            else if (initial.includes('NDIS Self Managed')) {
                this.singleSelect.value = 'NDIS Self Managed';
            }
            else {
                this.singleSelect.value = 'Privately Managed';
            }
            
        }
    }

    ngAfterViewInit() {
        this.setInitialValue();
    }

    ngOnDestroy() {
        this._onDestroy.next();
        this._onDestroy.complete();
    }

    /**
     * Sets the initial value after the filteredoptions are loaded initially
     */
    private setInitialValue() {
        this.filteredOptions
            .pipe(take(1), takeUntil(this._onDestroy))
            .subscribe(() => {
                // setting the compareWith property to a comparison function
                // triggers initializing the selection according to the initial value of
                // the form control (i.e. _initializeSelection())
                // this needs to be done after the filteredoptions are loaded initially
                // and after the mat-option elements are available
                if (this.returnObject) {
                    this.singleSelect.compareWith = (a: NameValue, b: NameValue) => a && b ? a.value === b.value : true;
                } else {
                    this.singleSelect.compareWith = (a: NameValue, b: NameValue) =>  a === b;
                }
            });
    }

    private filterOptions() {
        if (!this.options) {
            return;
        }
        // get the search keyword
        let search;
        if (this.returnObject) {
            search = this.optionsFilterCtrl.value;
        } else {
            search = this.optionsFilterCtrl;
        }
        if (!search) {
            this.filteredOptions.next(this.options.slice());
            return;
        } else {
            search = search.toLowerCase();
        }
        // filter the options
        this.filteredOptions.next(
            this.options.filter(option => option.name.toLowerCase().indexOf(search) > -1)
        );
    }

    // registerOnChange(fn: any): void {
    // }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }

    writeValue(obj: any): void {
        this.value = obj;
    }

    /**
     * Outcome of this function is used as a control value
     */
    toValue(option): any {
        if (!this.returnObject && option && option.value) {
            return option.value;
        }

        return option;
    }

    toLabel(option: any): any {
        if (typeof option === 'string') {
            return option;
        }

        if (option && option.name) {
            return option.name;
        }

        return option;
    }
}
