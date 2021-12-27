import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { PaymentOutcomeDataSource } from '../../data-sources/payment-outcome.data-source';

@Component({
    selector: 'app-payment-outcome-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Payment Outcome list';

    displayedColumns = [
        'select',

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

        'actions'
    ];

    ngOnInit() {
        this.dataSource = new PaymentOutcomeDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
