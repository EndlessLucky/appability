import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ActionDataSource extends RestApiDataSource {
    searchableFields = [
        'id',                // for column: "id"
        'lastmodified',                // for column: "LastModified"
        'lastmodifiedby',                // for column: "LastModifiedBy"
        'doToday',                // for column: "Do Today"
        'complete',                // for column: "Complete"
        'action',                // for column: "Action"
        'priority',                // for column: "Priority"
        'context',                // for column: "Context"
        'start',                // for column: "Start"
        'due',                // for column: "Due"
        'duration',                // for column: "Duration"
        'note',                // for column: "Note"
        'client',                // for column: "Client"
        'tag',                // for column: "Tag"
        'staff',                // for column: "Staff"
        'safehomechecklist',                // for column: "SafeHomeChecklist"
        'learninggoal',                // for column: "LearningGoal"

    ];
}
