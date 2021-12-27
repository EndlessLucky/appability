import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fromEvent, merge, Subscription } from 'rxjs/index';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { AuthenticationService } from '../../../../core/services/authentication.service';
import { FormComponent } from '../../../../features/data/components/form/form.component';
import { RestApiDataSource } from '../../data-sources/rest-api.data-source';
import { RestApiService } from '../../services/rest-api.service';

@Component({
    selector: 'app-grid-index',
    template: '',
    styleUrls: ['./data-grid.component.scss']
})
export class DataGridComponent implements AfterViewInit, OnDestroy {
    title = 'Data';
    defaultSortColumn = 'id';
    defaultSortDirection = 'desc';
    subscriptions: Subscription[] = [];
    pageSizeOptions = [20, 100, 250];
    selection = new SelectionModel<any>(true, []);
    dataSource: RestApiDataSource;
    formComponentType = null;
    apiName = this.dataService.apiName;
    public wheres = [];
    public activeWhereIndex = 0;

    createLink = ['../create'];

    whereVariables = {};
    // whereVariables = {
    //   '%userId%': this.authService.currentUserValue.id,
    //   // '%userName%': this.authService.currentUserValue.username,
    // };

    @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
    @ViewChild(MatSort, {static: false}) sort: MatSort;
    @ViewChild('term', {static: false}) term: ElementRef;

    constructor(protected dataService: RestApiService,
                protected dialog: MatDialog,
                private router: Router,
                protected activatedRoute: ActivatedRoute,
                protected authService: AuthenticationService
    ) {
    }

    /**
     * Replaces variables in this.wheres object
     *
     * @see this.whereVariables
     * @see this.wheres
     */
    replaceWhereVariables() {
        let jsonStr = JSON.stringify(this.wheres);
        const keys = Object.keys(this.whereVariables);
        if (keys) {
            for (const k of keys) {
                jsonStr = jsonStr.replace(k, this.whereVariables[k]);
            }
        }

        this.wheres = JSON.parse(jsonStr);
    }

    /**
     * @depracated use this.wheres directly
     */
    getWheres() {
        if (this.wheres && this.wheres.length) {
            return this.wheres;
        }

        return [];
    }

    getDialogConfig(data = {}) {
        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = false;
        dialogConfig.autoFocus = true;

        dialogConfig.data = data;

        return dialogConfig;
    }

    ngAfterViewInit() {
        this.pushSubscription(
            fromEvent(this.term.nativeElement, 'keyup')
                .pipe(
                    debounceTime(150),
                    distinctUntilChanged(),
                    tap(() => {
                        this.paginator.pageIndex = 0;
                        this.loadDataPage();
                    })
                )
                .subscribe());

        // reset the paginator after sorting
        this.pushSubscription(this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0));
        this.pushSubscription(
            merge(this.sort.sortChange, this.paginator.page)
                .pipe(
                    tap(() => this.loadDataPage())
                )
                .subscribe());
        this.loadDataPage();
    // this.replaceWhereVariables();
    }

    loadDataPage() {
        const activeWhere = this.getActiveWhere();
        let condition = null;
        if (activeWhere) {
            condition = activeWhere.condition;
        }

        this.dataSource.loadData(
            this.term.nativeElement.value,
            this.sort.direction,
            this.paginator.pageIndex,
            this.paginator.pageSize,
            this.sort.active,
            condition
        );
    }

    tabsEnabled() {
        return this.wheres && this.wheres.length > 0;
    }

    getActiveWhere() {
        if (this.tabsEnabled()) {
            return this.wheres[this.activeWhereIndex];
        }

        return null;
    }

    tabClick(index) {
        this.activeWhereIndex = index;
        this.loadDataPage();
    }

    onDelete(row) {
        if (window.confirm('Are you sure to delete?')) this.pushSubscription(this.dataService.delete(row.id).subscribe(data => this.loadDataPage()));
    }

    /**
     * @deprecated Don't use dialog forms, use CRUD
     * @param row
     */
    onEdit(row) {
        this.openDialog(row);
    }

    /**
     * Saves or updates the data in the database
     * Depending on presence of ID field
     */
    public saveOrUpdate(data) {
        if (data.id) {
            this.update(data);
        } else {
            this.save(data);
        }
    }

    public update(data) {
        this.pushSubscription(this.dataService.update(data).subscribe(response => {
            this.loadDataPage();
        }));
    }

    public save(data) {
        this.pushSubscription(this.dataService.save(data).subscribe(response => {
            // this.notificationService.notify('Data added');
            this.loadDataPage();
        }));
    }

    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        // const numRows = this.dataSource.data.length;
        // return numSelected === numRows;
        // @todo
        return false;
    }

    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
    // this.isAllSelected() ?
    //   this.selection.clear() :
    //   this.dataSource.data.forEach(row => this.selection.select(row));
    }

    /** The label for the checkbox on the passed row */
    checkboxLabel(row?): string {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
    }

    ngOnDestroy(): void {
        for (const subscription of this.subscriptions) {
            subscription.unsubscribe();
        }
    }

    pushSubscription(subscription) {
        this.subscriptions.push(subscription);
    }

    openDialog(data = {}) {
        const dialogRef = this.dialog.open(this.getFormComponent(), this.getDialogConfig(data));

        dialogRef.afterClosed().subscribe(values => {
            if (values && !this.hasAllPropertiesEmpty(values)) {
                this.saveOrUpdate(values);
            }
        });
    }

    hasAllPropertiesEmpty(object: any) {
        const keys = Object.keys(object);
        let counter = 0;
        for (const key of keys) {
            if (!this.isNull(object[key])) {
                counter++;
            }
        }

        return counter === 0;
    }

    getFormComponent() {
        if (this.formComponentType) {
            return this.formComponentType;
        }

        return FormComponent;
    }

    getCsvExportUrl() {
        return this.dataService.apiUrl + 'csv/export?model=' + this.dataService.modelName;
    }

    toString(object) {

      if (typeof object === 'object' && object?.id) {
        // @todo expect instance of model here (following model interface_, not just regular object (json)
        // @todo run model.toString() here
        // @todo: something like this:
        // const model = new this.dataService.model();
        // const rname = model.getRelation('keyConsultant2');
        // if (rname) {
        //   const r = new rname();
        //   return r.deserialize(object).toString();
        // } else {
        //   return object;
        // }
        // const modelName =this.dataService.getModelString();
        return object.id;
      }
      else if (typeof object === 'object' && object?.date) {
        return object.date;
      }

      return object;
    }

    getModelType() : string {
        return this.dataService.getModelString();
    }

    getFormatColumns() {
        return [''];
    }

    isNull(value: any) {
      return value === null || value === undefined;
    }
}
