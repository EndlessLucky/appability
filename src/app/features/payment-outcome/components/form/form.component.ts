import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { BaseFormComponent } from '../../../../shared/components/base-form/base-form.component';

@Component({
    selector: 'app-payment-outcome-create',
    templateUrl: './form.component.html',
    styleUrls: ['./../../../../shared/grid/components/core-form/core-form.component.scss']
})
export class FormComponent extends BaseFormComponent {
    fields = {
        id: ['', []],                // for column: "id"
        registrationnumber: ['', []],                // for column: "RegistrationNumber"
        ndisnumber: ['', []],                // for column: "NDISNumber"
        supportsdeliveredfrom: ['', []],                // for column: "SupportsDeliveredFrom"
        supportsdeliveredto: ['', []],                // for column: "SupportsDeliveredTo"
        supportnumber: ['', []],                // for column: "SupportNumber"
        claimreference: ['', []],                // for column: "ClaimReference"
        quantity: ['', []],                // for column: "Quantity"
        unitprice: ['', []],                // for column: "UnitPrice"
        gstcode: ['', []],                // for column: "GSTCode"
        paidtotalamount: ['', []],                // for column: "PaidTotalAmount"
        paymentRequestNumber: ['', []],                // for column: "Payment Request Number"
        participantName: ['', []],                // for column: "Participant Name"
        cappedPrice: ['', []],                // for column: "Capped Price"
        paymentRequestStatus: ['', []],                // for column: "Payment Request Status"
        errorMessage: ['', []],                // for column: "Error Message"
        claimtype: ['', []],                // for column: "ClaimType"
        cancellationreason: ['', []],                // for column: "CancellationReason"
    };
}
