import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class AbilityCalendarModel extends Deserializable implements ToString {
    public id: number;
    public rowId: string;                // for column: "Row ID"
    public title: string;                // for column: "Title"
    public start: Date;                // for column: "Start"
    public end: Date;                // for column: "End"
    public location: string;                // for column: "Location"
    public creator: string;                // for column: "Creator"
    public attendees: string;                // for column: "Attendees"
    public status: string;                // for column: "Status"
    public webLink: string;                // for column: "Web Link"
    public hangoutLink: string;                // for column: "Hangout Link"
    public description: string;                // for column: "Description"

    getKeys() {
        return [
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

    toString() {
        return this.rowId + '';
    }
}
