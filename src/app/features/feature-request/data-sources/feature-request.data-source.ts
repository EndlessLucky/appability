import { RestApiDataSource } from '../../../shared/grid/data-sources/rest-api.data-source';

export class FeatureRequestDataSource extends RestApiDataSource {
  searchableFields = [
    'id',                // for column: "id"
    'email'
  ];
}
