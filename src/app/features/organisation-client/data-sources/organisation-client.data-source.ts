import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class OrganisationClientDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'modifiedby',                // for column: "ModifiedBy"
        'client',                // for column: "Client"
        'organisation',                // for column: "Organisation"
        'typeOfService',                // for column: "Type of Service"


    ];
}
