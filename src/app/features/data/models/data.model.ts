import { Deserializable } from '../../../core/models/deserializable';

export class DataModel extends Deserializable {
    public id: number;
    public name: string;
    public surname: string;

    getKeys() {
        return [
            'id',
            'name',
            'surname',
            'datas',
        ];
    }
}
