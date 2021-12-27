import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ClientDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = ['id', 'client', 'projectName'];
}
