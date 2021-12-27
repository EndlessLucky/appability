import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class DocumentDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'name',                // for column: "Name"
        'dateOfNextReview',                // for column: "Date of Next Review"
        'type',                // for column: "Type"
        'linkedToAllRelatedQualityIndicators',                // for column: "Linked to all related Quality Indicators"
        'active',                // for column: "Active"
    ];
}
