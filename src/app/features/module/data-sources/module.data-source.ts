import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ModuleDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'code',                // for column: "Code"
        'label',                // for column: "Label"
        'active',                // for column: "Active"

    ];
}
