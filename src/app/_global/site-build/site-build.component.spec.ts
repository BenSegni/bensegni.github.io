import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteBuildComponent } from './site-build.component';

describe('SiteBuildComponent', () => {
  let component: SiteBuildComponent;
  let fixture: ComponentFixture<SiteBuildComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteBuildComponent]
    });
    fixture = TestBed.createComponent(SiteBuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
