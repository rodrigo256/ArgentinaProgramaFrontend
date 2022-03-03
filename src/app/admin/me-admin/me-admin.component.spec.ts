import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeAdminComponent } from './me-admin.component';

describe('MeAdminComponent', () => {
  let component: MeAdminComponent;
  let fixture: ComponentFixture<MeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
