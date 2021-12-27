import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-person-staff-status-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        person: ['', []],                // for column: "Person"
        staffstatus: ['', []],                // for column: "StaffStatus"
        start: ['', []],                // for column: "Start"
        end: ['', []],                // for column: "End"
        notes: ['', []],                // for column: "Notes"
    };
}
