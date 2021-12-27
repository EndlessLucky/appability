import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { IpServiceService } from './ip-service.service';

describe('IpServiceService', () => {
  let service: IpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [HttpClientTestingModule]
    });
    service = TestBed.inject(IpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
