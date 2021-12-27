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
import { ServiceBookingService } from '../../services/service-booking.service';

@Component({
    selector: 'app-service-booking-multi-autocomplete',
    templateUrl: '../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.html',
    styleUrls: ['../../../../shared/grid/components/data-multi-autocomplete/data-multi-autocomplete.component.scss'],
    providers: [
        {provide: MatFormFieldControl, useExisting: MultiAutocompleteComponent},
        {provide: RestApiService, useClass: ServiceBookingService}
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiAutocompleteComponent extends DataMultiAutocompleteComponent{

    static nextId = 0;

    // model related options

    @Input() orderByDirection: SortDirection = 'asc';
    @Input() maxItems = 25;

    /**
     * First element in this array is used as "orderBy"
     */
    @Input() searchableFields = ['serviceBookingNumber', 'id'];
    @Input() optionLabelFields = ['serviceBookingNumber', 'id'];

    /**
     * If null, first item of searchableFields is used;
     */
    orderBy = null;

    protected serviceRoute = 'service-booking';
}
