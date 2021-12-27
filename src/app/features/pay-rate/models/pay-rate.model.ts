import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class PayRateModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public rateName: string;                // for column: "Rate Name"
    public projectRate: string;                // for column: "Project Rate"
    public clientRate0: string;                // for column: "Client Rate 0"
    public clientRate8: string;                // for column: "Client Rate 8"
    public clientRate16: string;                // for column: "Client Rate 16"
    public clientRate24: string;                // for column: "Client Rate 24"
    public helpLoading: string;                // for column: "Help loading"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'rateName',                // for column: "Rate Name"
            'projectRate',                // for column: "Project Rate"
            'clientRate0',                // for column: "Client Rate 0"
            'clientRate8',                // for column: "Client Rate 8"
            'clientRate16',                // for column: "Client Rate 16"
            'clientRate24',                // for column: "Client Rate 24"
            'helpLoading',                // for column: "Help loading"
        ];
    }

    toString() {
        return this.rateName;
    }
}
