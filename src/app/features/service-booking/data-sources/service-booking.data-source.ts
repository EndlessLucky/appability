import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class ServiceBookingDataSource extends RestApiDataSource implements RestApiDataSourceInterface {
    searchableFields = ['id'];
}
