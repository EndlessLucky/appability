import {
    ElementRef,
    HostBinding,
    Component,
    OnInit,
    ViewChild,
    Input,
    Optional,
    Self,
    ChangeDetectorRef, OnDestroy, forwardRef, ChangeDetectionStrategy
} from '@angular/core';
import { NgControl, FormControl, ControlValueAccessor } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { BehaviorSubject, Subject, Subscription } from 'rxjs';
import { debounceTime, map, tap } from 'rxjs/operators';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { FocusMonitor } from '@angular/cdk/a11y';
import { SelectableListItem } from '../../../../core/models/selectable-list-item';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';

@Component({
    selector: 'app-data-multi-autocomplete',
    templateUrl: './data-multi-autocomplete.component.html',
    styleUrls: ['./data-multi-autocomplete.component.scss'],
    providers: [
        {provide: MatFormFieldControl, useExisting: DataMultiAutocompleteComponent},
        {provide: RestApiService}
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataMultiAutocompleteComponent implements OnInit, OnDestroy, MatFormFieldControl<SelectableListItem[]>, ControlValueAccessor {

    protected serviceRoute;

    static nextId = 0;

    // model related options

    @Input() orderByDirection: SortDirection = 'asc';
    @Input() maxItems = 25;

    /**
     * First element in this array is used as "orderBy"
     */
    @Input() searchableFields = ['name', 'surname', 'id'];
    @Input() optionLabelFields = ['name', 'surname'];

    /**
     * If null, first item of searchableFields is used;
     */
    orderBy = null;

    // general options

    @ViewChild('inputTrigger', {static: true, read: MatAutocompleteTrigger}) inputTrigger: MatAutocompleteTrigger;
    @HostBinding() id = `input-ac-${DataMultiAutocompleteComponent.nextId++}`;
    @HostBinding('attr.aria-describedby') describedBy = '';

    @Input() label = 'Search and select';


    // required by MatFormFieldControl interface
    empty: boolean;
    shouldLabelFloat: boolean;
    required: boolean;
    disabled: boolean;
    errorState: boolean;
    controlType?: string;
    autofilled?: boolean;

    /**
     * Waits with the next API request
     * Used to minimize http requests to API, depends on the typing speed
     */
    autocompleteDelay = 200;

    /**
     * Minimal keyword length to display autocomplete
     */
    minLength = 0;

    /**
     * Progress spinner debounce time to prevent flickering on fast requests
     */
    progressIndicatorAfter = 250;

    // private changeCallback: (selectedItems) => void;
    changeCallback: any = (_: void) => {
        //do nothing
    };
    touchedCallback: any = (_: void) => {
        //do nothing
    };
    // private touchedCallback: () => void;
    private chipClickedCallback: (listItem) => void;
    focused = false;
    lastFilter = '';
    selectable = false;
    removable = true;

    selectedItems: SelectableListItem[] = new Array<SelectableListItem>(); // chips
    optionList: SelectableListItem[] = []; // autocomplete options / checkboxes
    public loadingState: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
    public $isLoading = this.loadingState.pipe(debounceTime(this.progressIndicatorAfter));
    inputControl = new FormControl();
    stateChanges = new Subject<void>();
    private placeholderValue: string;

    private subscriptions: Subscription = new Subscription();

    // METHODS

    constructor(
        @Optional() @Self() public ngControl: NgControl,
        private fm: FocusMonitor,
        private elRef: ElementRef<HTMLElement>,
        private cd: ChangeDetectorRef,
        private dataService: RestApiService
    ) {
        if (this.ngControl != null) {
            this.ngControl.valueAccessor = this;
        }
        this.subscriptions.add(fm.monitor(elRef.nativeElement, true).subscribe(origin => {
            this.focused = !!origin;
            if (this.focused) {
                this.inputTrigger.closePanel();
            }
            this.stateChanges.next();
        }));
    }

    ngOnInit() {
        this.subscriptions.add(
            this.inputControl.valueChanges.pipe(
                debounceTime(this.autocompleteDelay),
                tap(value => {
                    if (value.length >= this.minLength) {
                        this.loadData(value);
                    } else {
                        this.optionList = [];
                    }
                })
            ).subscribe()
        );
    }

    // Setters / getters

    @Input()
    set value(value: any) {
        if (value) {
            this.selectedItems = value;
        }
        this.stateChanges.next();
        this.changeCallback(value);
        this.touchedCallback();
    }

    get value() {
        return this.selectedItems.map(item => item.value);
    }

    @Input()
    get placeholder() {
        return this.placeholderValue;
    }

    set placeholder(plh) {
        this.placeholderValue = plh;
        this.stateChanges.next();
    }

    setDescribedByIds(ids: string[]) {
        this.describedBy = ids.join(' ');
    }

    /**
     * Set form field value
     */
    writeValue(value: any) {
        for (const item of value) {
            this.selectedAdd(new SelectableListItem(item, true));
        }
    }

    /**
     * Define function called when the chip is clicked (by default it's removing the item from the list of selected items)
     */
    registerChipClickedCallback(fn: any) {
        this.chipClickedCallback = fn;
    }

    registerOnChange(fn: any) {
        this.changeCallback = fn;
    }

    registerOnTouched(fn: any) {
        this.touchedCallback = fn;
    }

    setDisabledState?(isDisabled: boolean): void {
    // throw new Error('Method not implemented.');
    }

    /**
     * Change "selected" state in autocomplete items
     */
    updateOption(listItem: SelectableListItem, checked: boolean) {
        const i = this.optionList.find(item => item.value.id === listItem.value.id);
        if (i) {
            i.selected = checked;
        }
        if (this.changeCallback && typeof this.changeCallback === 'function') {
            this.changeCallback(this.selectedItems.map(item => item.value));
        }
    }

    /**
     * Open the autocomplete when button clicked
     */
    openPanel(event) {
        event.stopPropagation();
        if (!this.optionList.length) {
            this.loadData(this.lastFilter);
        }
        this.inputTrigger.openPanel();
    }

    /**
     * Add item to list of selected items
     */
    selectedAdd(item: SelectableListItem) {
        item.selected = true;
        if (!this.isSelected(item.value)) {
            this.selectedItems.push(item);
        }
        this.updateOption(item, true);
    }

    /**
     * Remove item from list of selected items
     */
    selectedRemove(item: SelectableListItem) {
        const i = this.selectedItems.findIndex(val => item.value.id === val.value.id);
        if (i >= 0) {
            this.selectedItems.splice(i, 1);
        }
        this.updateOption(item, false);
    }

    /**
     * Do nothing when option is selected
     * We handle this by handling checkbox clicks
     */
    selected() {
        return false;
    }

    /**
     * Method called when autocomplete checkbox is clicked
     */
    checkboxClicked(event, listItem) {
        event.stopImmediatePropagation();
        if (listItem.selected) {
            this.selectedRemove(listItem);
        } else {
            this.selectedAdd(listItem);
        }
        return false;
    }

    /**
     * Is this object on the currently selected list?
     */
    isSelected(object: any) {
        for (const item of this.selectedItems) {
            if (item.value.id === object.id) {
                return true;
            }
        }
        return false;
    }

    /**
     * Method called when chip "remove" action is triggered
     */
    remove(item: SelectableListItem) {
        this.selectedRemove(item);
    }

    // required by MatFormField interface
    onContainerClick(event: MouseEvent): void {
    // throw new Error('Method not implemented.');
    }

    /**
     * Displayed in the autocomplete search box
     */
    getDisplayed(data) {
        return '';
    }

    getOrderByField() {
        if (null === this.orderBy) {
            if (this.searchableFields.length) {
                this.orderBy = this.searchableFields[0];
            } else {
                return 'id';
            }
        }

        return this.orderBy;
    }

    /**
     * Fields used in search query
     */
    getSearchableFields() {
        if (null === this.searchableFields) {
            this.searchableFields = [this.getOrderByField()];
        }

        return this.searchableFields;
    }

    /**
     * Load options from API
     */
    loadData(value) {
        this.lastFilter = value;
        this.loadingState.next(true);
        this.subscriptions.add(
            this.dataService.findSerialized(
                value,
                this.orderByDirection,
                0,
                this.maxItems,
                this.getOrderByField(),
                this.getSearchableFields()
            ).pipe(
                map((res) => {
                    const items = [];
                    for (let i = 0; i < res.length; i++) {
                        items[i] = new SelectableListItem(res[i], this.isSelected(res[i]));
                    }
                    return items;
                })).subscribe(data => this.optionList = data,
                error => this.loadingState.next(false),
                () => this.loadingState.next(false)
            )
        );
    }

    closePanel(event) {
        event.stopPropagation();
        this.inputTrigger.closePanel();
    }

    /**
     * Checkbox label displayed in the autocomplete options and in selected chips
     * To be implemented for each autocomplete model
     */
    getOptionLabel(listItem: SelectableListItem): string {
        let label = '';
        if (this.optionLabelFields && this.optionLabelFields.length) {
            for (const aa of this.optionLabelFields) {
                label = label + ' ' + listItem.value[aa];
            }
            return label;
        } else {
            return listItem.value[this.getOrderByField()];
        }
    }

    /**
     * Called when the chip is clicked
     *
     * @see registerChipClickedCallback()
     * @example this.registerChipClickedCallback(listItem => alert(listItem.value.id);
     */
    chipClicked(listItem) {
        if (typeof this.chipClickedCallback === 'function') {
            this.chipClickedCallback(listItem);
        } else {
            this.selectedRemove(listItem);
        }
    }

    /**
     * Cleanup
     */
    ngOnDestroy() {
        this.fm.stopMonitoring(this.elRef.nativeElement);
        this.stateChanges.complete();
        this.loadingState.complete();

        this.subscriptions.unsubscribe();
    }

    getCreateRoute() {
        return '/' + this.serviceRoute + '/create';
    }

    getViewRoute() {
        return '/' + this.serviceRoute + '/' + this.inputControl.value.id + '/role';
    }

    getListRoute() {
        return '/' + this.serviceRoute + '/list';
    }

}
