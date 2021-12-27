import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DeserializableInterface } from '../../../../core/models/deserializable';
import { RestApiService } from '../../services/rest-api.service';

@Component({
    selector: 'app-grid-view',
    templateUrl: './data-view.component.html',
    styleUrls: ['./data-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DataViewComponent implements OnInit, OnDestroy {
    title = null;
    fullTitle = null;
    // model$: Observable<DeserializableInterface>;
    model$: Observable<any>;
    subscription: Subscription;
    id = null;
    apiName = this.dataService.apiName;

    lastRes = this.dataService.lastRes;

    displayedFields = null;
    customClass : any;

    constructor(protected dataService: RestApiService, protected route: ActivatedRoute) {
    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.id = params.id;

            // determine title if not specified
            let h1 = 'Data';
            if (this.title) {
                h1 = this.title;
            } else {
                const data = this.route.snapshot.data;
                if (data && data.title) {
                    h1 = data.title;
                    this.title = h1;
                }
                h1 = h1 + ' #' + this.id;
            }
            this.fullTitle = h1;
            this.model$ = this.dataService.findOne(this.id);
            this.model$.subscribe(res => {
                if(typeof res.adapt != 'undefined') {
                    const formatter = res.adapt();
                    for (const key of Object.keys(formatter)) {
                        this.customClass = formatter[key];
                        break;
                    }
                }
            })
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    /**
     * @todo Do not use function in view or use different change strategy
     * Format displayed value
     */
    public decorate(value) {
        if (!value) {
            return value;
        }
        switch (typeof value) {
            case 'boolean': {
                return value ? 'YES' : 'NO';
            }

            case 'object': {
                if (Object.prototype.hasOwnProperty.call(value, 'date')) {
                    return new Date(value.date).toLocaleDateString();
                }
                // if (value.hasOwnProperty('date')) {
                //     return new Date(value.date).toLocaleDateString();
                // }

                const model = new this.dataService.model();

                const rname = model.getRelation('keyConsultant2');
                if (rname) {
                    const r = new rname();
                    return r.deserialize(value).toString();
                } else {
                    return value;
                }
            }

            case 'number': {
                return value;
            }

            case 'string':
            default: {
                if ('FALSE' === value || 'false' === value) {
                    return 'NO';
                }
                if ('TRUE' === value || 'true' === value) {
                    return 'YES';
                }

                return value;
            }
        }
    }
}
