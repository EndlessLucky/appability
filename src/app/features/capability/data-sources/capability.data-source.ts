import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class CapabilityDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastModified',                // for column: "last_modified"
        'lastModifiedBy',                // for column: "last_modified_by"
        'capability',                // for column: "Capability"
        'competency',                // for column: "Competency"
        'active',                // for column: "Active"


    ];
}
