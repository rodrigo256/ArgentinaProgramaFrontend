import { TestBed } from '@angular/core/testing';

import { SkillAdminService } from './skill-admin.service';

describe('SkillAdminService', () => {
  let service: SkillAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SkillAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
