import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class DocumentStandardModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public documentid: string;                // for column: "DocumentID"
    public standardid: string;                // for column: "StandardID"
    public howDoTheyRelate: string;                // for column: "How do they Relate?"
    public defaultResponse: boolean;                // for column: "Default Response"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'documentid',                // for column: "DocumentID"
            'standardid',                // for column: "StandardID"
            'howDoTheyRelate',                // for column: "How do they Relate?"
            'defaultResponse',                // for column: "Default Response"
        ];
    }

    toString() {
        return this.documentid + ': ' + this.standardid;
    }
}
