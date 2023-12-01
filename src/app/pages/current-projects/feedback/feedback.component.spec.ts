import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackComponent } from './feedback.component';
import { FeedbackLinkComponent } from '../feedback-link/feedback-link.component';
import { AltTextPipe } from '../../../_global/utils/pipes/alt-text.pipe';

describe('FeedbackComponent', () => {
  let component: FeedbackComponent;
  let fixture: ComponentFixture<FeedbackComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FeedbackComponent, FeedbackLinkComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(FeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('testing Subscription()', () => {
    it('should emit values', () => {
        component.feedback$.subscribe({
            next: (response) => {
                expect(response).toBeTruthy();
                expect(response[0].title).toBe('Ed Wheldon, Frontend Web Developer')
            }
        })
    })
  })
});
