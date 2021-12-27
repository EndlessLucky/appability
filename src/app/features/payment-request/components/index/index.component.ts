import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { PaymentRequestDataSource } from '../../data-sources/payment-request.data-source';

@Component({
    selector: 'app-payment-request-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Payment Request list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'claimreference',                // for column: "ClaimReference"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'ndisManaged',                // for column: "NDIS Managed"
        'submittedInBulk',                // for column: "Submitted in Bulk"
        'submitted',                // for column: "Submitted"
        'status',                // for column: "Status"
        // 'bulkFileReference',                // for column: "Bulk File Reference"
        'paymentRequestNumber',                // for column: "Payment Request Number"
        'serviceBooking',                // for column: "Service Booking"
        'serviceBookingDetail',                // for column: "Service Booking Detail"
        'invoiceNumber',                // for column: "Invoice Number"
        'submittedOn',                // for column: "Submitted On"
        'submittedBy',                // for column: "Submitted By"
        'rejectReason',                // for column: "Reject Reason"
        'notes',                // for column: "Notes"
        'paidOn',                // for column: "Paid on"
        // 'startDate',                // for column: "Start Date"
        // 'endDate',                // for column: "End Date"
        'submittedAmount',                // for column: "Submitted Amount"
        'totalQuantity',                // for column: "Total Quantity"
        'gstcode',                // for column: "GSTCode"


        'actions'
    ];

    ngOnInit() {
        this.dataSource = new PaymentRequestDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }

    getFormatColumns() {
        return ['claimreference','status'];
    }
}
