import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ContractorInvoiceModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public contractor: string;                // for column: "Contractor"
    public recipientReference: string;                // for column: "Recipient Reference"
    public contractorReference: string;                // for column: "Contractor Reference"
    public fileUrl: string;                // for column: "File URL"
    public dateAndTimeSubmitted: string;                // for column: "Date and Time Submitted"
    public paid: boolean;                // for column: "Paid"
    public permissionForVariance: string;                // for column: "Permission for Variance"
    public dateAndTimePaid: string;                // for column: "Date and Time Paid"
    public paymentAmount: string;                // for column: "Payment Amount"
    public emailedToContractor: string;                // for column: "Emailed to Contractor"
    public paymentBankReceipt: string;                // for column: "Payment Bank Receipt"
    public note: string;                // for column: "Note"
    public adjective: string;                // for column: "Adjective"
    public totalDueLastInvoice: string;                // for column: "Total Due Last Invoice"
    public superPaymentMade: boolean;                // for column: "Super Payment Made"
    public superPaymentAttached: boolean;                // for column: "Super Payment Attached"


    getKeys() {
        return [
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
    }

    toString() {
        return this.id + ': ' + this.dateAndTimeSubmitted;
    }
}
