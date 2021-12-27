import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ClientSrStageModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public stage: string;                // for column: "Stage"
    public client: string;                // for column: "Client"
    public start: string;                // for column: "Start"
    public reasonLost: string;                // for column: "Reason Lost"


    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'stage',                // for column: "Stage"
            'client',                // for column: "Client"
            'start',                // for column: "Start"
            'reasonLost',                // for column: "Reason Lost"
        ];
    }

    toString() {
        return this.stage;
    }
}
