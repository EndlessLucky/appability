import { Paginator } from '../../../core/models/api/paginator.class';
import { Response } from '../../../core/models/api/response.class';
import { DataSource } from '@angular/cdk/table';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { CollectionViewer } from '@angular/cdk/collections';
import { catchError, finalize, map, tap } from 'rxjs/operators';
import { RestApiService } from '../services/rest-api.service';
import { SortDirection } from '@angular/material/sort';
export class RestApiDataSource implements DataSource<any> {
    private dataSubject = new BehaviorSubject<any[]>([]);

    public searchableFields = ['id'];
    private loadingSubject = new BehaviorSubject<boolean>(false);

    private paginatorSubject = new BehaviorSubject<Paginator>(new Paginator());

    public loading$ = this.loadingSubject.asObservable();
    public paginator$ = this.paginatorSubject.asObservable();

    public length = this.paginator$.pipe(map(paginator => paginator.total_items));

    protected defaultPageSize = 1;
    protected defaultOrderByDirection: SortDirection = 'desc';
    protected defaultOrderByField = 'id';

    setSearchableFields(fields: string[]) {
        this.searchableFields = fields;
    }

    getSearchableFields() {
        return this.searchableFields;
    }

    setDefaultPageSize(size: number) {
        this.defaultPageSize = size;
    }

    setDefaultOrderBy(field) {
        this.defaultOrderByField = field;
    }

    setDefaultOrderByDirection(direction: SortDirection) {
        this.defaultOrderByDirection = direction;
    }

    constructor(private service: RestApiService) {
        this.setDefaults();
    }

    connect(collectionViewer: CollectionViewer): Observable<any[]> {
        return this.dataSubject.asObservable();
    }

    setDefaults() {
        this.defaultPageSize = this.service.defaultPageSize;
        this.defaultOrderByDirection = this.service.defaultOrderByDirection;
        this.defaultOrderByField = this.service.defaultOrderByField;
    // this.dataSubject.next;
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.dataSubject.complete();
        this.loadingSubject.complete();
        this.paginatorSubject.complete();
    }

    /**
     * Load data from API
     *
     */
    loadData(filter = '',
             sortDirection = this.defaultOrderByDirection,
             pageIndex = 0,
             pageSize = this.defaultPageSize,
             field = this.defaultOrderByField,
             condition = null
    ) {

        this.loadingSubject.next(true);

        // stupid workaround which may not work with caching...
        // remove the data prior to loading next page
        this.dataSubject.next([]);

        const modelString = this.getModelString();

        this.service.find(filter, sortDirection,
            pageIndex, pageSize, field, this.searchableFields, condition).pipe(
            tap(data => this.paginatorSubject.next(new Paginator().deserialize(data))),
            tap((response: any) => {
                // extract field names from API to be used in filter queries
                if (!this.searchableFields.length && response._embedded[modelString].length) {
                    this.searchableFields = Object.keys(response._embedded[modelString][0]).filter(name => name[0] !== '_');
                }
            }),
            map((response: Response) => new Response().deserialize(response).toCollection(modelString, this.getModel())),
            catchError(() => of([])),
            finalize(() => this.loadingSubject.next(false))
        )
            .subscribe(data => {
                this.dataSubject.next(data);
            })
        ;
    }

    findOne(id: number) {
        return this.service.findOne(id);
    }

    /**
     * To be used in validation filters
     */
    findDuplicates(field, value, pageSize = 1) {
        return this.service.findDuplicates(field, value, pageSize);
    }

    /**
     * This is used to identify the model string used in api (needs to be underscored)
     */
    getModelString() {
        return this.service.modelName;
    }

    /**
     * @depecated Use Response::toCollection()
     */
    toCollection(data: Response) {
        const modelString = this.getModelString();
        const len = data._embedded[modelString].length;
        let i = 0;
        const collection = [];
        for (i = 0; i < len; i++) {
            collection.push(new this.service.model.deserialize(data._embedded[modelString][i]));
        }

        return collection;
    }

    getModel() {
        return this.service.model;
    }

    getApiName() {
        return this.service.apiName;
    }
}
