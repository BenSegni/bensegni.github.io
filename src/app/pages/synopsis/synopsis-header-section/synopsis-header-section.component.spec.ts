import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisHeaderSectionComponent } from './synopsis-header-section.component';

describe('SynopsisHeaderSectionComponent', () => {
  let component: SynopsisHeaderSectionComponent;
  let fixture: ComponentFixture<SynopsisHeaderSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopsisHeaderSectionComponent]
    });
    fixture = TestBed.createComponent(SynopsisHeaderSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
