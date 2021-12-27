import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ClientStageModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LastModified"
    // public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public rank: string;                // for column: "Rank"
    public title: string;                // for column: "Title"
    public active: boolean;                // for column: "Active"
    public isprojectstage: boolean;                // for column: "IsProjectStage"

    getKeys() {
        return [
            'id',                // for column: "id"
            // 'lastmodified',                // for column: "LastModified"
            // 'lastmodifiedby',                // for column: "LastModifiedBy"
            'rank',                // for column: "Rank"
            'title',                // for column: "Title"
            'active',                // for column: "Active"
            'isprojectstage',                // for column: "IsProjectStage"
        ];
    }

    toString() {
        return this.rank + ': ' + this.title;
    }
}
