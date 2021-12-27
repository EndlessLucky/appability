import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-complaint-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        personMakingComplaint: ['', []],                // for column: "Person Making Complaint"
        feedbackType: ['', []],                // for column: "Feedback Type"
        topic: ['', []],                // for column: "Topic"
        outcomeSought: ['', []],                // for column: "Outcome Sought"
        fromWhom: ['', []],                // for column: "From Whom"
        recieved: ['', []],                // for column: "Recieved"
        howRecieved: ['', []],                // for column: "How recieved"
        acknowledged: ['', []],                // for column: "Acknowledged"
        howAcknowledged: ['', []],                // for column: "How acknowledged"
        resolved: ['', []],                // for column: "Resolved"
        how: ['', []],                // for column: "How"
    };
}
