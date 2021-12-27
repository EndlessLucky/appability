import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';
// import { DisplayAdapter } from '../../../core/adapters/display-adapter';
import { UniverseFormat } from '../../../shared/components/formats/universe-format';
import { Formatter } from '../components/index/formatter';


export class ClientPersonModel extends Deserializable implements ToString, UniverseFormat {
    public id: number;                // for column: "id"
    // public lastmodified: string;                // for column: "LastModified"
    // public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public client: string;                // for column: "Client"
    public person: string;                // for column: "Person"
    public relationshipOfPersonToClient: string;                // for column: "Relationship of Person to Client"
    public active: boolean;                // for column: "Active"
    public feedback: boolean;                // for column: "Feedback"

    getKeys() {
        return [
            'id',                // for column: "id"
            // 'lastmodified',                // for column: "LastModified"
            // 'lastmodifiedby',                // for column: "LastModifiedBy"
            'client',                // for column: "Client"
            'person',                // for column: "Person"
            'relationshipOfPersonToClient',                // for column: "Relationship of Person to Client"
            'active',                // for column: "Active"
            'feedback',                // for column: "Feedback"

        ];
    }

    toString() {
        return this.id + '';
    }

    adapt() {
        return new Formatter(this).getFormatter();
        // const clientFormatter = {
        //     bold : this?.client? true : false
        // };
        // const personFormatter = {
        //     bold : this?.person? true : false
        // };
        // this.rule = {
        //     client : clientFormatter,
        //     person : personFormatter,
        // }
        // return this.rule;
    }
}
