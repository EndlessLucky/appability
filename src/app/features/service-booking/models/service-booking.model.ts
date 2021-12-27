import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ServiceBookingModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public client: string;                // for column: "Client"
    public serviceBookingNumber: string;                // for column: "Service Booking Number"
    public start: string;                // for column: "Start"
    public end: string;                // for column: "End"
    public revisedEnd: string;                // for column: "Revised End"
    public active: boolean;                // for column: "Active"
    public isdraft: boolean;                // for column: "IsDraft"

    getKeys() {
        return [
            'id',
            'lastmodified',
            'lastmodifiedby',
            'client',
            'serviceBookingNumber',
            'start',
            'end',
            'revisedEnd',
            'active',
            'isdraft',
        ];
    }

    toString() {
        if (this.serviceBookingNumber) {
            return this.serviceBookingNumber + ' (id: ' + this.id + ')';
        } else {
            return 'No number' + ' (id: ' + this.id + ')';
        }
    }
}
