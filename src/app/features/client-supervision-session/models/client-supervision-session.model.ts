import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ClientSupervisionSessionModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public clientSr: string;                // for column: "Client SR"
    public supervisionSession: string;                // for column: "Supervision Session"
    public durationdiscussed: string;                // for column: "DurationDiscussed"
    public paymentRequest: string;                // for column: "Payment Request"
    public supervisorInvoice: string;                // for column: "Supervisor Invoice"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'clientSr',                // for column: "Client SR"
            'supervisionSession',                // for column: "Supervision Session"
            'durationdiscussed',                // for column: "DurationDiscussed"
            'paymentRequest',                // for column: "Payment Request"
            'supervisorInvoice',                // for column: "Supervisor Invoice"
        ];
    }

    toString() {
        return this.supervisionSession;
    }
}
