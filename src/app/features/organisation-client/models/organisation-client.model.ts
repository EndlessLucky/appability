import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class OrganisationClientModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public modifiedby: string;                // for column: "ModifiedBy"
    public client: string;                // for column: "Client"
    public organisation: string;                // for column: "Organisation"
    public typeOfService: string;                // for column: "Type of Service"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'modifiedby',                // for column: "ModifiedBy"
            'client',                // for column: "Client"
            'organisation',                // for column: "Organisation"
            'typeOfService',                // for column: "Type of Service"
        ];
    }

    toString() {
        return this.organisation + ': ' + this.client;
    }
}
