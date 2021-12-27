import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ActionModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public doToday: boolean;                // for column: "Do Today"
    public complete: string;                // for column: "Complete"
    public action: string;                // for column: "Action"
    public priority: string;                // for column: "Priority"
    public context: string;                // for column: "Context"
    public start: string;                // for column: "Start"
    public due: string;                // for column: "Due"
    public duration: string;                // for column: "Duration"
    public note: string;                // for column: "Note"
    public client: string;                // for column: "Client"
    public tag: string;                // for column: "Tag"
    public staff: string;                // for column: "Staff"
    public safehomechecklist: string;                // for column: "SafeHomeChecklist"
    public learninggoal: string;                // for column: "LearningGoal"


    getKeys() {
        return [
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

    toString() {
        return this.id + ': ' + this.id;
    }
}
