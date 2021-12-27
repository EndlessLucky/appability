import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ServiceRequestTypeDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = ['id', 'label', 'code', 'description'];
}
