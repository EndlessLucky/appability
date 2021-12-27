import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-organisation-client-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        modifiedby: ['', []],                // for column: "ModifiedBy"
        client: ['', []],                // for column: "Client"
        organisation: ['', []],                // for column: "Organisation"
        typeOfService: ['', []],                // for column: "Type of Service"
    };
}
