import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMeAdminComponent } from './about-me-admin.component';

describe('AboutMeAdminComponent', () => {
  let component: AboutMeAdminComponent;
  let fixture: ComponentFixture<AboutMeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutMeAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutMeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
