import { Component, OnInit } from '@angular/core';
import { DataViewComponent } from '../../../../shared/grid/components/data-view/data-view.component';

@Component({
    selector: 'app-contractor-invoice-view',
    templateUrl: './view.component.html',
    styleUrls: ['../../../../shared/grid/components/data-view/data-view.component.scss']
})
export class ViewComponent extends DataViewComponent implements OnInit {
    // title = 'Your custom here';
    apiName = 'contractor-invoice';

    displayedFields = [
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
    ];

    sendPdf(model) {
      // @todo implement or remove
    }

    // @todo implement or remove
    htmlLink = null;
}

