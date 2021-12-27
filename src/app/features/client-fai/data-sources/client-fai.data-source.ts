import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientFaiDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastmodifiedBY"
        'fai',                // for column: "FAI"
        'clientSr',                // for column: "Client SR"
        'current',                // for column: "Current"


    ];
}
