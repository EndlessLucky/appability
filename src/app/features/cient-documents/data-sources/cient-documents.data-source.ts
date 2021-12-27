import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class CientDocumentsDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'fileUrl',                // for column: "File URL"
        'client',                // for column: "Client"
        'fileName',                // for column: "File Name"


    ];
}
