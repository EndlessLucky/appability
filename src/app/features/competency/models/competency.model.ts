import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class CompetencyModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public name: string;                // for column: "Name"
    public description: string;                // for column: "Description"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'name',                // for column: "Name"
            'description',                // for column: "Description"

        ];
    }

    toString() {
        return this.name;
    }
}
