import { TestBed } from '@angular/core/testing';

import { MeAdminService } from './me-admin.service';

describe('MeAdminService', () => {
  let service: MeAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
