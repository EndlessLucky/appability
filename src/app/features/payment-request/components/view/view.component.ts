import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-payment-request-view',
    templateUrl: '../../../../shared/grid/components/data-view/data-view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'payment-request';

    displayedFields = [
        'id',                // for column: "id"
        'claimreference',                // for column: "ClaimReference"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'ndisManaged',                // for column: "NDIS Managed"
        'submittedInBulk',                // for column: "Submitted in Bulk"
        'submitted',                // for column: "Submitted"
        'status',                // for column: "Status"
        'bulkFileReference',                // for column: "Bulk File Reference"
        'paymentRequestNumber',                // for column: "Payment Request Number"
        'serviceBooking',                // for column: "Service Booking"
        'serviceBookingDetail',                // for column: "Service Booking Detail"
        'invoiceNumber',                // for column: "Invoice Number"
        'submittedOn',                // for column: "Submitted On"
        'submittedBy',                // for column: "Submitted By"
        'rejectReason',                // for column: "Reject Reason"
        'notes',                // for column: "Notes"
        'paidOn',                // for column: "Paid on"
        'startDate',                // for column: "Start Date"
        'endDate',                // for column: "End Date"
        'submittedAmount',                // for column: "Submitted Amount"
        'totalQuantity',                // for column: "Total Quantity"
        'gstcode',                // for column: "GSTCode"
        'successful'
    ];
}

