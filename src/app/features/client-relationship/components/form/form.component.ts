import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-client-relationship-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        // lastmodified: ['', []],                // for column: "LAstModified"
        // lastmodifiedby: ['', []],                // for column: "LAstModifiedBy"
        relationship: ['', [Validators.required]],                // for column: "Relationship"
        active: ['', []],                // for column: "ACtive"
    };
}
