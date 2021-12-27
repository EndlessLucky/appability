import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class AdjectiveDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'adjective',                // for column: "Adjective"


    ];
}
