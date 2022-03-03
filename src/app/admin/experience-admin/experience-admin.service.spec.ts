import { TestBed } from '@angular/core/testing';

import { ExperienceAdminService } from './experience-admin.service';

describe('ExperienceAdminService', () => {
  let service: ExperienceAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExperienceAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
