import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-client-person-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        // lastmodified: ['', []],                // for column: "LastModified"
        // lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        client: ['', Validators.required],                // for column: "Client"
        person: ['', Validators.required],                // for column: "Person"
        relationshipOfPersonToClient: ['', Validators.required],                // for column: "Relationship of Person to Client"
        active: ['', []],                // for column: "Active"
        feedback: ['', []],                // for column: "Feedback"
    };
}
