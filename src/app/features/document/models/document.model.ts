import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class DocumentModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public name: string;                // for column: "Name"
    public dateOfNextReview: string;                // for column: "Date of Next Review"
    public type: string;                // for column: "Type"
    public linkedToAllRelatedQualityIndicators: boolean;                // for column: "Linked to all related Quality Indicators"
    public active: boolean;                // for column: "Active"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'name',                // for column: "Name"
            'dateOfNextReview',                // for column: "Date of Next Review"
            'type',                // for column: "Type"
            'linkedToAllRelatedQualityIndicators',                // for column: "Linked to all related Quality Indicators"
            'active',                // for column: "Active"
        ];
    }

    toString() {
        return this.type + ' ' + this.id + ': ' + this.name;
    }
}
