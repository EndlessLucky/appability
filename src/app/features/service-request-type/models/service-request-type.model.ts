import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ServiceRequestTypeModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LastModified"
    // public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public label: string;                // for column: "Label"
    public code: boolean;                // for column: "Code"
    public description: string;                // for column: "Description"
    public clientisorganisation: boolean;                // for column: "ClientIsOrganisation"
    public endedDate: string;                // for column: "ended_date"

    getKeys() {
        return [
            'id',
            // 'lastmodified',
            // 'lastmodifiedby',
            'label',
            'code',
            'description',
            'clientisorganisation',
            'endedDate'
        ];
    }

    toString() {
        return this.label;
    }
}
