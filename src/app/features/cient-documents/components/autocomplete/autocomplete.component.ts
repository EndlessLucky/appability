import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { CientDocumentsService } from '../../services/cient-documents.service';

@Component({
    selector: 'app-cient-documents-autocomplete',
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
    serviceRoute = 'cient-documents';
    label = 'CientDocuments';

    getDisplayed(data) {
        return data ? data.id : data;
    }

    constructor(protected dataService: CientDocumentsService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

