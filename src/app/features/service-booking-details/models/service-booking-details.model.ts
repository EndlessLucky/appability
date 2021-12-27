import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ServiceBookingDetailsModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LastModified"
    // public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public serviceBooking: string;                // for column: "Service Booking"
    public supportBudget: string;                // for column: "Support Budget"
    public supportItemId: string;                // for column: "Support Item ID"
    public supportItemName: string;                // for column: "Support Item Name"
    public descriptionOfServicesOutcomeMeasures: string;                // for column: "Description of Services & Outcome Measures"
    public hours: string;                // for column: "Hours"
    public allocatedAmount: string;                // for column: "Allocated Amount"
    public fundsManagement: string;                // for column: "Funds Management"
    public enteredPre3July2019: boolean;                // for column: "Entered Pre 3 July 2019"

    getKeys() {
        return [
            'id',                // for column: "id"
            // 'lastmodified',                // for column: "LastModified"
            // 'lastmodifiedby',                // for column: "LastModifiedBy"
            'serviceBooking',                // for column: "Service Booking"
            'supportBudget',                // for column: "Support Budget"
            'supportItemId',                // for column: "Support Item ID"
            'supportItemName',                // for column: "Support Item Name"
            'descriptionOfServicesOutcomeMeasures',                // for column: "Description of Services & Outcome Measures"
            'hours',                // for column: "Hours"
            'allocatedAmount',                // for column: "Allocated Amount"
            'fundsManagement',                // for column: "Funds Management"
            'enteredPre3July2019',                // for column: "Entered Pre 3 July 2019"
        ];
    }

    toString() {
        return this.id + '';
    }
}
