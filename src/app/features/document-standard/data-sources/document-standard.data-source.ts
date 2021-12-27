import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class DocumentStandardDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'documentid',                // for column: "DocumentID"
        'standardid',                // for column: "StandardID"
        'howDoTheyRelate',                // for column: "How do they Relate?"
        'defaultResponse',                // for column: "Default Response"


    ];
}
