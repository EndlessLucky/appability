import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class IncidentHazardModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public hazard: string;                // for column: "Hazard"
    public incident: string;                // for column: "Incident"


    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'hazard',                // for column: "Hazard"
            'incident',                // for column: "Incident"
        ];
    }

    toString() {
        return this.incident + ': ' + this.hazard;
    }
}
