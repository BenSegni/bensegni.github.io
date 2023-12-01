import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackLinkComponent } from './feedback-link.component';

describe('FeedbackLinkComponent', () => {
  let component: FeedbackLinkComponent;
  let fixture: ComponentFixture<FeedbackLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackLinkComponent]
    });
    fixture = TestBed.createComponent(FeedbackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
