import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class PayRateDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'rateName',                // for column: "Rate Name"
        'projectRate',                // for column: "Project Rate"
        'clientRate0',                // for column: "Client Rate 0"
        'clientRate8',                // for column: "Client Rate 8"
        'clientRate16',                // for column: "Client Rate 16"
        'clientRate24',                // for column: "Client Rate 24"
        'helpLoading',                // for column: "Help loading"

    ];
}
