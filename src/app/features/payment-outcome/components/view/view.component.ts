import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-payment-outcome-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'payment-outcome';

    displayedFields = [
        'id',                // for column: "id"
        'registrationnumber',                // for column: "RegistrationNumber"
        'ndisnumber',                // for column: "NDISNumber"
        'supportsdeliveredfrom',                // for column: "SupportsDeliveredFrom"
        'supportsdeliveredto',                // for column: "SupportsDeliveredTo"
        'supportnumber',                // for column: "SupportNumber"
        'claimreference',                // for column: "ClaimReference"
        'quantity',                // for column: "Quantity"
        'unitprice',                // for column: "UnitPrice"
        'gstcode',                // for column: "GSTCode"
        'paidtotalamount',                // for column: "PaidTotalAmount"
        'paymentRequestNumber',                // for column: "Payment Request Number"
        'participantName',                // for column: "Participant Name"
        'cappedPrice',                // for column: "Capped Price"
        'paymentRequestStatus',                // for column: "Payment Request Status"
        'errorMessage',                // for column: "Error Message"
        'claimtype',                // for column: "ClaimType"
        'cancellationreason',                // for column: "CancellationReason"
    ];
}

