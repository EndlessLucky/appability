import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { MatFormFieldControl } from '@angular/material/form-field';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';
import { DataService } from '../../services/data.service';
// tslint:disable-next-line:max-line-length
import { DataMultiAutocompleteComponent } from '../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component';

@Component({
    selector: 'app-multi-autocomplete',
    templateUrl: '../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.html',
    styleUrls: ['../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.scss'],
    providers: [
        {provide: MatFormFieldControl, useExisting: MultiAutocompleteComponent},
        {provide: RestApiService, useClass: DataService}
    ],
    changeDetection: ChangeDetectionStrategy.Default
})
export class MultiAutocompleteComponent extends DataMultiAutocompleteComponent{

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
}
