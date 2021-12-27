import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class HazardDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'hazardLabel',                // for column: "Hazard Label"
        'hazardType',                // for column: "Hazard Type"
        'hazardDescription',                // for column: "Hazard Description"
        'image',                // for column: "Image"

    ];
}
