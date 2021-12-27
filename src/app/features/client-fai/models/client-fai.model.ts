import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ClientFaiModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastmodifiedBY"
    public fai: string;                // for column: "FAI"
    public clientSr: string;                // for column: "Client SR"
    public current: boolean;                // for column: "Current"


    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastmodifiedBY"
            'fai',                // for column: "FAI"
            'clientSr',                // for column: "Client SR"
            'current',                // for column: "Current"

        ];
    }

    toString() {
        return this.id + ': ' + this.fai;
    }
}
