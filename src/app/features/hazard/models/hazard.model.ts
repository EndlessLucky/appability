import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class HazardModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public hazardLabel: string;                // for column: "Hazard Label"
    public hazardType: string;                // for column: "Hazard Type"
    public hazardDescription: string;                // for column: "Hazard Description"
    public image: string;                // for column: "Image"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'hazardLabel',                // for column: "Hazard Label"
            'hazardType',                // for column: "Hazard Type"
            'hazardDescription',                // for column: "Hazard Description"
            'image',                // for column: "Image"
        ];
    }

    toString() {
        return this.hazardLabel + ': ' + this.hazardType;
    }
}
