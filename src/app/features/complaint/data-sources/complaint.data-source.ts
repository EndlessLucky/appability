import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ComplaintDataSource extends RestApiDataSource {
    searchableFields = [
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
