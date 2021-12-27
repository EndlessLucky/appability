import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ComplaintModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public personMakingComplaint: string;                // for column: "Person Making Complaint"
    public feedbackType: string;                // for column: "Feedback Type"
    public topic: string;                // for column: "Topic"
    public outcomeSought: string;                // for column: "Outcome Sought"
    public fromWhom: string;                // for column: "From Whom"
    public recieved: string;                // for column: "Recieved"
    public howRecieved: string;                // for column: "How recieved"
    public acknowledged: string;                // for column: "Acknowledged"
    public howAcknowledged: string;                // for column: "How acknowledged"
    public resolved: boolean;                // for column: "Resolved"
    public how: string;                // for column: "How"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'personMakingComplaint',                // for column: "Person Making Complaint"
            'feedbackType',                // for column: "Feedback Type"
            'topic',                // for column: "Topic"
            'outcomeSought',                // for column: "Outcome Sought"
            'fromWhom',                // for column: "From Whom"
            'recieved',                // for column: "Recieved"
            'howRecieved',                // for column: "How recieved"
            'acknowledged',                // for column: "Acknowledged"
            'howAcknowledged',                // for column: "How acknowledged"
            'resolved',                // for column: "Resolved"
            'how',                // for column: "How"
        ];
    }

    toString() {
        return this.id + ': ' + this.fromWhom;
    }
}
