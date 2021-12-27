import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-service-request-type-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
      id: ['', []],                // for column: "ID"
      // lastmodified: ['', []],                // for column: "LastModified"
      // lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
      label: ['', [Validators.required]],                // for column: "Label"
      code: ['', []],                // for column: "Code"
      description: ['', [Validators.required]],                // for column: "Description"
      clientisorganisation: ['', []],                // for column: "ClientIsOrganisation"
      endedDate: ['', [Validators.required]]                // for column: "ended_date"
      // created: ['', []],                // for column: ""
      // updated: ['', []],                // for column: ""
    };
}
