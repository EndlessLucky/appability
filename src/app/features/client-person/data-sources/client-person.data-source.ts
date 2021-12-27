import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientPersonDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"

        // @see: oV8GXspn
        // 'client',                // for column: "Client"
        // 'person',                // for column: "Person"

        'relationshipOfPersonToClient',                // for column: "Relationship of Person to Client"
        'active',                // for column: "Active"
        'feedback',                // for column: "Feedback"


    ];
}
