import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class CapabilityModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastModified: string;                // for column: "last_modified"
    public lastModifiedBy: string;                // for column: "last_modified_by"
    public capability: string;                // for column: "Capability"
    public competency: string;                // for column: "Competency"
    public active: boolean;                // for column: "Active"


    getKeys() {
        return [
            'id',                // for column: "id"
            'lastModified',                // for column: "last_modified"
            'lastModifiedBy',                // for column: "last_modified_by"
            'capability',                // for column: "Capability"
            'competency',                // for column: "Competency"
            'active',                // for column: "Active"
        ];
    }

    toString() {
        return this.capability;
    }
}
