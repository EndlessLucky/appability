import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class PaymentOutcomeModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public registrationnumber: string;                // for column: "RegistrationNumber"
    public ndisnumber: string;                // for column: "NDISNumber"
    public supportsdeliveredfrom: string;                // for column: "SupportsDeliveredFrom"
    public supportsdeliveredto: string;                // for column: "SupportsDeliveredTo"
    public supportnumber: string;                // for column: "SupportNumber"
    public claimreference: string;                // for column: "ClaimReference"
    public quantity: string;                // for column: "Quantity"
    public unitprice: string;                // for column: "UnitPrice"
    public gstcode: string;                // for column: "GSTCode"
    public paidtotalamount: string;                // for column: "PaidTotalAmount"
    public paymentRequestNumber: number;                // for column: "Payment Request Number"
    public participantName: string;                // for column: "Participant Name"
    public cappedPrice: string;                // for column: "Capped Price"
    public paymentRequestStatus: string;                // for column: "Payment Request Status"
    public errorMessage: string;                // for column: "Error Message"
    public claimtype: string;                // for column: "ClaimType"
    public cancellationreason: string;                // for column: "CancellationReason"


    getKeys() {
        return [
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

    toString() {
        return this.id + ': ' + this.registrationnumber + ' - ' + this.ndisnumber;
    }
}
