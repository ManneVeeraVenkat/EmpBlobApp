import { TestBed } from '@angular/core/testing';

import { EmpBlobServiceService } from './emp-blob-service.service';

describe('EmpBlobServiceService', () => {
  let service: EmpBlobServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpBlobServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
