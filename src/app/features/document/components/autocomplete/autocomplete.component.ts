import { Component, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { DataAutocompleteComponent } from '../../../../shared/grid/components/data-autocomplete/data-autocomplete.component';
import { DocumentService } from '../../services/document.service';

@Component({
    selector: 'app-document-autocomplete',
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
    serviceRoute = 'document';
    label = 'Document';

    getDisplayed(data) {
        return data ? data.id : data;
    }

    constructor(protected dataService: DocumentService) {
        super();
    }

    getViewRoute(): string {
        return '/' + this.serviceRoute + '/view/' + this.getId();
    }
}

