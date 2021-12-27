import { RestApiService } from '../../../shared/grid/services/rest-api.service';
import { PersonModel } from '../models/person.model';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PersonService extends RestApiService {
    model = PersonModel;
    modelName = 'person';
    apiName = 'person';
}
