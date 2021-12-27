import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class IncidentHazardDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'hazard',                // for column: "Hazard"
        'incident',                // for column: "Incident"

    ];
}
