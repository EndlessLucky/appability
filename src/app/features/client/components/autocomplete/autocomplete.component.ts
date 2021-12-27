import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { ClientService } from '../../services/client.service';

@Component({
    selector: 'app-client-autocomplete',
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
    orderByDirection: SortDirection = 'desc';

    mainField = 'id';
    searchableFields = ['id'];
    serviceRoute = 'client';
    label = 'Client';

    getDisplayed(data) {
        return data ? data.id : '';
    }

    constructor(protected dataService: ClientService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

