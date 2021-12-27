import { Component, forwardRef, Input, OnDestroy, OnInit, OnChanges } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { Observable, of, Subscription } from 'rxjs';

import { debounceTime, tap } from 'rxjs/operators';
import { RestApiService } from '../../services/rest-api.service';

@Component({
    selector: 'app-data-autocomplete',
    templateUrl: './data-autocomplete.component.html',
    styleUrls: ['./data-autocomplete.component.scss'],
})
export class DataAutocompleteComponent extends FormControl implements OnInit, OnDestroy, OnChanges {

    debug = false;

    mainField = 'role';

    serviceRoute = 'user';

    /**
     * To be injected in the child's class constructor
     */
    protected dataService: RestApiService;

    @Input() label = null;
    @Input() initial_region : any;

    maxItems = 25;

    orderByDirection: SortDirection = 'asc';

    searchableFields = null;

    /**
     * Minimum number of characters triggering autocomplete
     */
    minLength = 0;

    debounceTime = 250;

    value = null;

    // @Input() private dataService: RestApiService;
    @Input() formControl: FormControl;

    private subscriptions: Subscription = new Subscription();

    $filtered: Observable<any> = of([]);

    onTouched: any = (_: any) => {
        //do nothing
    };

    constructor(
    ) {
        super();
    }

    getDisplayed(data) {
        return data ? data.id : data;
    }

    getTitle() {
        return this.label ? this.label : this.getOrderByField();
    }

    getOrderByField() {
        if (null == this.mainField) {
            return 'id';
        }

        return this.mainField;
    }

    getSearchableFields() {
        if (null === this.searchableFields) {
            this.searchableFields = [this.getOrderByField()];
        }

        return this.searchableFields;
    }

    getCreateRoute() {
        return '/' + this.serviceRoute + '/create';
    }

    getViewRoute() {
        return '/' + this.serviceRoute + '/' + this.formControl.value.id + '/role';
    }

    getListRoute() {
        return '/' + this.serviceRoute + '/list';
    }

    loadData(value) {
        this.$filtered = this.dataService.findSerialized(
            value,
            this.orderByDirection,
            0,
            this.maxItems,
            this.getOrderByField(),
            this.getSearchableFields()
        );
    }

    keyUp(event) {
    // if (event.ctrlKey === true) {
    //   if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    //     workaround to display the default autocomplete when pressing down or up arrow keys
        // this.loadData('');
        // }
    // }

        return event;
    }

    search() {
        this.formControl.setValue('', {emitEvent: false});
        this.loadData('');
    }

    ngOnInit(): void {
        if(this.formControl) {
            this.subscriptions.add(
                this.formControl.valueChanges.pipe(
                    debounceTime(this.debounceTime),
                    tap(value => {
                        if (value?.length >= this.minLength) {
                            this.loadData(value);
                        } else {
                            this.$filtered = of([]);
                        }
                    })
                ).subscribe()
            );
            // this.formControl.setValue(this.formControl.value);
            // console.log(this.formControl.value);
        }

    }

    ngOnChanges() {
        if(this.initial_region) {
            const initial = this.initial_region;
            this.formControl.setValue({name: initial});
        }
    }

    getLabel(record) {
        if (typeof record.toString === 'function') {
            return record.toString();
        } else {
            return record[this.getOrderByField()];
        }
    }

    ngOnDestroy(): void {
        this.subscriptions.unsubscribe();
    }

    getId() {
        return this.formControl.value ? (this.formControl.value.id ? this.formControl.value.id : '') : '';
    }

    writeValue(val: any): void {
        this.value = val;
    }

    registerOnTouched(fn: any): void {
        this.onTouched = fn;
    }
}
