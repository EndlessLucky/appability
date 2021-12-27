import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientStageDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        // 'lastmodified',                // for column: "LastModified"
        // 'lastmodifiedby',                // for column: "LastModifiedBy"
        'rank',                // for column: "Rank"
        'title',                // for column: "Title"
        'active',                // for column: "Active"
        'isprojectstage',                // for column: "IsProjectStage"

    ];
}
