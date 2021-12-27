import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class RegionDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'name',                // for column: "name"
        'comments',                // for column: "comments"
    ];
}
