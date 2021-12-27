import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SortDirection } from '@angular/material/sort';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { AbilityConsultantsReferralFormService } from '../../services/ability-consultants-referral-form.service';

@Component({
    selector: 'app-ability-consultants-referral-form-autocomplete',
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
    searchableFields = ['id', 'firstNameOfReferrer', 'lastNameOfReferrer'];
    serviceRoute = 'ability-consultants-referral-form';
    label = 'Ability Consultants Referral Form';

    getDisplayed(data) {
        return data ? data.firstNameOfReferrer + ' ' + (data.lastNameOfReferrer ? data.lastNameOfReferrer : '') : '';
    }

    constructor(protected dataService: AbilityConsultantsReferralFormService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

