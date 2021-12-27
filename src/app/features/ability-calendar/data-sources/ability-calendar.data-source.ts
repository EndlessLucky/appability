import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class AbilityCalendarDataSource extends RestApiDataSource {
    searchableFields = [
        'id',
        'rowId',                // for column: "Row ID"
        'title',                // for column: "Title"
        'start',                // for column: "Start"
        'end',                // for column: "End"
        'location',                // for column: "Location"
        'creator',                // for column: "Creator"
        'attendees',                // for column: "Attendees"
        'status',                // for column: "Status"
        'webLink',                // for column: "Web Link"
        'hangoutLink',                // for column: "Hangout Link"
        'description',                // for column: "Description"
    ];
}
