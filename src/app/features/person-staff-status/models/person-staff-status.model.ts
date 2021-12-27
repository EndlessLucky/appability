import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class PersonStaffStatusModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public person: string;                // for column: "Person"
    public staffstatus: string;                // for column: "StaffStatus"
    public start: string;                // for column: "Start"
    public end: string;                // for column: "End"
    public notes: string;                // for column: "Notes"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'person',                // for column: "Person"
            'staffstatus',                // for column: "StaffStatus"
            'start',                // for column: "Start"
            'end',                // for column: "End"
            'notes',                // for column: "Notes"
        ];
    }

    toString() {
        return this.person + ': ' + this.staffstatus;
    }
}
