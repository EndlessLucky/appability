import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class RegionModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public name: string;                // for column: "name"
    public comments: string;                // for column: "comments"
    public updated: Date = null;                // for column: "updated"
    public created: Date = null;                // for column: "created"

    getKeys() {
        return [
            'id',                // for column: "id"
            'name',                // for column: "name"
            'comments',                // for column: "comments"
            'created',                // for column: "created"
            'updated',                // for column: "updated"
        ];
    }

    toString() {
        return this.name;
    }
}
