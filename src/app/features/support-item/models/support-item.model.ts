import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class SupportItemModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public supportcategoryname: string;                // for column: "SupportCategoryName"
    public supportitemdescription: string;                // for column: "SupportItemDescription"
    public hourlyRate: string;                // for column: "Hourly Rate"
    public isclientbillable: boolean;                // for column: "IsClientBillable"
    public key: string;                // for column: "Key"
    public active: boolean;                // for column: "Active"
    public end: string;                // for column: "End"
    public registrationGroupName: string;                // for column: "Registration Group Name"
    public a2019HourlyRate: string;                // for column: "2019 Hourly Rate"

    getKeys() {
        return [
            'id',                // for column: "id"
            'supportcategoryname',                // for column: "SupportCategoryName"
            'supportitemdescription',                // for column: "SupportItemDescription"
            'hourlyRate',                // for column: "Hourly Rate"
            'isclientbillable',                // for column: "IsClientBillable"
            'key',                // for column: "Key"
            'active',                // for column: "Active"
            'end',                // for column: "End"
            'registrationGroupName',                // for column: "Registration Group Name"
            'a2019HourlyRate',                // for column: "2019 Hourly Rate"
        ];
    }

    toString() {
        return this.supportcategoryname;
    }
}
