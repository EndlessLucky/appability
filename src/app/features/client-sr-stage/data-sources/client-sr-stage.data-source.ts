import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientSrStageDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'stage',                // for column: "Stage"
        'client',                // for column: "Client"
        'start',                // for column: "Start"
        'reasonLost',                // for column: "Reason Lost"

    ];
}
