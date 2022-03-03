import { TestBed } from '@angular/core/testing';

import { AboutMeAdminService } from './about-me-admin.service';

describe('AboutMeAdminService', () => {
  let service: AboutMeAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AboutMeAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
