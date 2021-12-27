import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class IncidentModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: Date;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public personReporting: string;                // for column: "Person Reporting"
    public date: Date;                // for column: "Date"
    public timeOfIncident: string;                // for column: "Time of incident"
    public incidentAddress: string;                // for column: "Incident Address"
    public whereExactly: string;                // for column: "Where exactly"
    public briefTitle: string;                // for column: "Brief Title"
    public detailedDescriptionOfWhatHappened: string;                // for column: "Detailed Description of what happened"
    public status: string;                // for column: "Status"
    public image: string;                // for column: "Image"


    getKeys() {
        return [
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

    toString() {
        return this.id + ': ' + this.timeOfIncident;
    }
}
