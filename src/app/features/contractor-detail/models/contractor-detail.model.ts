import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class ContractorDetailModel extends Deserializable implements ToString {
    public id: number;                // for column: "id"
    public lastmodified: string;                // for column: "LastModified"
    public lastmodifiedby: string;                // for column: "LastModifiedBy"
    public businessName: string;                // for column: "Business Name"
    public abn: string;                // for column: "ABN"
    public accountName: string;                // for column: "Account Name"
    public bsb: string;                // for column: "BSB"
    public accountNumber: string;                // for column: "Account Number"
    public businessAddress: string;                // for column: "Business Address"
    public currentContractUrl: string;                // for column: "Current Contract URL"
    public superChoiceFormUrl: string;                // for column: "Super Choice Form URL"

    getKeys() {
        return [
            'id',                // for column: "id"
            'lastmodified',                // for column: "LastModified"
            'lastmodifiedby',                // for column: "LastModifiedBy"
            'businessName',                // for column: "Business Name"
            'abn',                // for column: "ABN"
            'accountName',                // for column: "Account Name"
            'bsb',                // for column: "BSB"
            'accountNumber',                // for column: "Account Number"
            'businessAddress',                // for column: "Business Address"
            'currentContractUrl',                // for column: "Current Contract URL"
            'superChoiceFormUrl',                // for column: "Super Choice Form URL"
        ];
    }

    toString() {
        return this.id + ': ' + this.businessName;
    }
}
