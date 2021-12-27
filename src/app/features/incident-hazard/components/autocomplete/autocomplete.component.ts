import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { IncidentHazardService } from '../../services/incident-hazard.service';

@Component({
    selector: 'app-incident-hazard-autocomplete',
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
    mainField = 'id';
    searchableFields = ['id'];
    serviceRoute = 'incident-hazard';
    label = 'Incident Hazard';

    getDisplayed(data) {
        return data ? data.id : data;
    }

    constructor(protected dataService: IncidentHazardService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

