import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-capability-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastModified: ['', []],                // for column: "last_modified"
        lastModifiedBy: ['', []],                // for column: "last_modified_by"
        capability: ['', []],                // for column: "Capability"
        competency: ['', []],                // for column: "Competency"
        active: ['', []],                // for column: "Active"

    };
}
