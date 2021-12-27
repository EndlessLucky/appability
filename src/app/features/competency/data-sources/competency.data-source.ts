import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class CompetencyDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'name',                // for column: "Name"
        'description',                // for column: "Description"

    ];
}
