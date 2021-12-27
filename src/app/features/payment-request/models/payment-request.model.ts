import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';
import { UniverseFormat } from '../../../shared/components/formats/universe-format';
import { Formatter } from '../components/index/formatter';


export class PaymentRequestModel extends Deserializable implements ToString, UniverseFormat {
    public id: number;                // for column: "id"
    public claimreference: string;                // for column: "ClaimReference"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public ndisManaged: boolean;                // for column: "NDIS Managed"
    public submittedInBulk: boolean;                // for column: "Submitted in Bulk"
    public submitted: boolean;                // for column: "Submitted"
    public status: string;                // for column: "Status"
    public bulkFileReference: string;                // for column: "Bulk File Reference"
    public paymentRequestNumber: string;                // for column: "Payment Request Number"
    public serviceBooking: string;                // for column: "Service Booking"
    public serviceBookingDetail: string;                // for column: "Service Booking Detail"
    public invoiceNumber: string;                // for column: "Invoice Number"
    public submittedOn: string;                // for column: "Submitted On"
    public submittedBy: string;                // for column: "Submitted By"
    public rejectReason: string;                // for column: "Reject Reason"
    public notes: string;                // for column: "Notes"
    public paidOn: string;                // for column: "Paid on"
    public startDate: string;                // for column: "Start Date"
    public endDate: string;                // for column: "End Date"
    public submittedAmount: string;                // for column: "Submitted Amount"
    public totalQuantity: string;                // for column: "Total Quantity"
    public gstcode: string;                // for column: "GSTCode"
    public successful : string;

    getKeys() {
        return [
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

    toString() {
        return this.id + ': ' + this.serviceBooking;
    }

    adapt() {
        return new Formatter(this).getFormatter();
    }
}
