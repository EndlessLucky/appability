import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-client-supervision-session-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        lastmodified: ['', []],                // for column: "LastModified"
        lastmodifiedby: ['', []],                // for column: "LastModifiedBy"
        clientSr: ['', []],                // for column: "Client SR"
        supervisionSession: ['', []],                // for column: "Supervision Session"
        durationdiscussed: ['', []],                // for column: "DurationDiscussed"
        paymentRequest: ['', []],                // for column: "Payment Request"
        supervisorInvoice: ['', []],                // for column: "Supervisor Invoice"
    };
}
