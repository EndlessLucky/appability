import { Component, OnInit } from '@angular/core';
import { DataGridComponent } from '../../../../shared/grid/components/data-grid/data-grid.component';
import { ContractorInvoiceDataSource } from '../../data-sources/contractor-invoice.data-source';

@Component({
    selector: 'app-contractor-invoice-index',
    templateUrl: '../../../../shared/grid/components/data-grid/data-grid.component.html',
    styleUrls: ['../../../../shared/grid/components/data-grid/data-grid.component.scss']
})
export class IndexComponent extends DataGridComponent implements OnInit {
    title = 'Contractor Invoice list';

    displayedColumns = [
        'select',

        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'contractor',                // for column: "Contractor"
        'recipientReference',                // for column: "Recipient Reference"
        'contractorReference',                // for column: "Contractor Reference"
        'fileUrl',                // for column: "File URL"
        'dateAndTimeSubmitted',                // for column: "Date and Time Submitted"
        'paid',                // for column: "Paid"
        'permissionForVariance',                // for column: "Permission for Variance"
        'dateAndTimePaid',                // for column: "Date and Time Paid"
        'paymentAmount',                // for column: "Payment Amount"
        'emailedToContractor',                // for column: "Emailed to Contractor"
        'paymentBankReceipt',                // for column: "Payment Bank Receipt"
        'note',                // for column: "Note"
        'adjective',                // for column: "Adjective"
        'totalDueLastInvoice',                // for column: "Total Due Last Invoice"
        'superPaymentMade',                // for column: "Super Payment Made"
        'superPaymentAttached',                // for column: "Super Payment Attached"



        'actions'
    ];

    ngOnInit() {
        this.dataSource = new ContractorInvoiceDataSource(this.dataService);
        this.dataSource.setDefaultPageSize(this.pageSizeOptions[0]);
        this.dataSource.loadData();
    }
}
