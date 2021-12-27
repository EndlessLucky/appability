import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class PersonStaffStatusDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'person',                // for column: "Person"
        'staffstatus',                // for column: "StaffStatus"
        'start',                // for column: "Start"
        'end',                // for column: "End"
        'notes',                // for column: "Notes"

    ];
}
