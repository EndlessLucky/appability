import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-hazard-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        hazardLabel: ['', []],                // for column: "Hazard Label"
        hazardType: ['', []],                // for column: "Hazard Type"
        hazardDescription: ['', []],                // for column: "Hazard Description"
        image: ['', []],                // for column: "Image"
    };
}
