import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ClientRelationshipModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LAstModified"
    // public lastmodifiedby: string;                // for column: "LAstModifiedBy"
    public relationship: string;                // for column: "Relationship"
    public active: boolean;                // for column: "ACtive"

    getKeys() {
        return [
            'id',                // for column: "id"
            // 'lastmodified',                // for column: "LAstModified"
            // 'lastmodifiedby',                // for column: "LAstModifiedBy"
            'relationship',                // for column: "Relationship"
            'active',                // for column: "ACtive"
        ];
    }

    toString() {
        return this.relationship;
    }
}
