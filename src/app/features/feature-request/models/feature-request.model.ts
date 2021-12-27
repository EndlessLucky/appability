import { Deserializable } from '../../../core/models/deserializable';
import { ToString } from '../../../core/models/to-string';

export class FeatureRequestModel extends Deserializable implements ToString {
  public id: number;                // for column: "id"
  public title: string;            // for column : title
  public description: string;      // for column : desciption
  public username: string;          // for column : username
  public role: string;          // for column : role
  public type: number;             // for column : issue type
  // public fileUrl: string;         // for column : uploaded file url
  public priority: number;         // for column : priority
  public values: string;

  getKeys() {
    return [
      'id',                // for column: "id"
      'title',
      'description',
      'username',
      'role',
      'type',
      // 'fileUrl',
      'priority',
      'values'
    ];
  }

}
