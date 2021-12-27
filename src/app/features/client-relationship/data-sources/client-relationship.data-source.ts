import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientRelationshipDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LAstModified"
        // 'lastmodifiedby',                // for column: "LAstModifiedBy"
        'relationship',                // for column: "Relationship"
        'active',                // for column: "ACtive"


    ];
}
