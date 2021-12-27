import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class CientDocumentsModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public fileUrl: string;                // for column: "File URL"
    public client: string;                // for column: "Client"
    public fileName: string;                // for column: "File Name"


    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'fileUrl',                // for column: "File URL"
            'client',                // for column: "Client"
            'fileName',                // for column: "File Name"
        ];
    }

    toString() {
        return this.id + '';
    }
}
