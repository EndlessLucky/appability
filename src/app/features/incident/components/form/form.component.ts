import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-incident-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        personReporting: ['', []],                // for column: "Person Reporting"
        date: ['', []],                // for column: "Date"
        timeOfIncident: ['', []],                // for column: "Time of incident"
        incidentAddress: ['', []],                // for column: "Incident Address"
        whereExactly: ['', []],                // for column: "Where exactly"
        briefTitle: ['', []],                // for column: "Brief Title"
        detailedDescriptionOfWhatHappened: ['', []],                // for column: "Detailed Description of what happened"
        status: ['', []],                // for column: "Status"
        image: ['', []],                // for column: "Image"
    };
}
