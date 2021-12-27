import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-document-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        name: ['', []],                // for column: "Name"
        dateOfNextReview: ['', []],                // for column: "Date of Next Review"
        type: ['', []],                // for column: "Type"
        linkedToAllRelatedQualityIndicators: ['', []],                // for column: "Linked to all related Quality Indicators"
        active: ['', []],                // for column: "Active"

    };
}
