import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { ServiceBookingService } from '../../services/service-booking.service';

@Component({
    selector: 'app-service-booking-autocomplete',
    templateUrl: '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component.html',
    styleUrls: ['../../../../shared/grid/components/data-autocomplete/data-autocomplete.component.scss'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => AutocompleteComponent),
            multi: true
        }
    ]
})
export class AutocompleteComponent extends DataAutocompleteComponent {
    mainField = 'serviceBookingNumber';
    searchableFields = ['id', 'serviceBookingNumber'];
    serviceRoute = 'service-booking';
    label = 'Service Booking';

    getDisplayed(data) {
        return data ? data.serviceBookingNumber : data;
    }

    constructor(protected dataService: ServiceBookingService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

