import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ModuleModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public code: string;                // for column: "Code"
    public label: string;                // for column: "Label"
    public active: boolean;                // for column: "Active"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'code',                // for column: "Code"
            'label',                // for column: "Label"
            'active',                // for column: "Active"
        ];
    }

    toString() {
        return this.code + ': ' + this.label;
    }
}
