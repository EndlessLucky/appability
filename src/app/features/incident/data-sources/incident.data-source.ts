import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class IncidentDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'personReporting',                // for column: "Person Reporting"
        'date',                // for column: "Date"
        'timeOfIncident',                // for column: "Time of incident"
        'incidentAddress',                // for column: "Incident Address"
        'whereExactly',                // for column: "Where exactly"
        'briefTitle',                // for column: "Brief Title"
        'detailedDescriptionOfWhatHappened',                // for column: "Detailed Description of what happened"
        'status',                // for column: "Status"
        'image',                // for column: "Image"


    ];
}
