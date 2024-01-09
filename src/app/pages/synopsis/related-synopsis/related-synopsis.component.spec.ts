import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RelatedSynopsisComponent } from './related-synopsis.component';

describe('RelatedSynopsisComponent', () => {
  let component: RelatedSynopsisComponent;
  let fixture: ComponentFixture<RelatedSynopsisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RelatedSynopsisComponent]
    });
    fixture = TestBed.createComponent(RelatedSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
