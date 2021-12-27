/**
 * User Model
 * Generated from Doctrine entity: User-info.php
 */
import { Deserializable } from '../../../core/models/deserializable';

export class UserModel extends Deserializable {
    public id: number;
    public role: string;
    public username: string;
    public profile: string;
    public email: string;
    public country: string;
    public phone_number: string;

    getKeys() {
        return [
            'id',
            'role',
            'username',
            'profile',
            'email',
            'country',
            'phone_number',
        ];
    }
}
