import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';
import { UserModel } from '../models/user.model';

export class UserDataSource extends RestApiDataSource {
    model = UserModel;
    apiName = 'user_info';
}
