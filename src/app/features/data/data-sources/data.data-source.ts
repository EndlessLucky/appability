import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class DataDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = ['id', 'name', 'surname'];
}
