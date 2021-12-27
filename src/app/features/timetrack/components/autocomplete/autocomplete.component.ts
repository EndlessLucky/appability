import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { TimetrackService } from '../../services/timetrack.service';

@Component({
    selector: 'app-timetrack-autocomplete',
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
    serviceRoute = 'timetrack';
    label = 'Timetrack';

    getDisplayed(data) {
        return data ? data.id : data;
    }

    constructor(protected dataService: TimetrackService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

