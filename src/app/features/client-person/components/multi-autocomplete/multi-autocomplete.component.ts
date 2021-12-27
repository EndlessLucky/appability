import {
    ChangeDetectionStrategy,
    Component,
    Input,
} from '@angular/core';
import { SortDirection } from '@angular/material/sort';
import { MatFormFieldControl } from '@angular/material/form-field';
import { RestApiService } from '../../../../shared/grid/services/rest-api.service';
// tslint:disable-next-line:max-line-length
import { DataMultiAutocompleteComponent } from '../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component';
import { ClientPersonService } from '../../services/client-person.service';

@Component({
    selector: 'app-client-person-multi-autocomplete',
    templateUrl: '../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.html',
    styleUrls: ['../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.scss'],
    providers: [
        {provide: MatFormFieldControl, useExisting: MultiAutocompleteComponent},
        {provide: RestApiService, useClass: ClientPersonService}
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAutocompleteComponent extends DataMultiAutocompleteComponent{

    protected serviceRoute = 'client-person';

    static nextId = 0;

    // model related options

    @Input() orderByDirection: SortDirection = 'asc';
    @Input() maxItems = 25;

    /**
     * First element in this array is used as "orderBy"
     */
    @Input() searchableFields = ['client', 'person', 'relationshipOfPersonToClient', 'id'];
    @Input() optionLabelFields = ['client', 'person'];

    /**
     * If null, first item of searchableFields is used;
     */
    orderBy = null;
}
