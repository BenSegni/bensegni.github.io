import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectsComponent } from './current-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackLinkComponent } from './feedback-link/feedback-link.component';
import { AltTextPipe } from '../../_global/utils/pipes/alt-text.pipe';

describe('CurrentProjectsComponent', () => {
  let component: CurrentProjectsComponent;
  let fixture: ComponentFixture<CurrentProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrentProjectsComponent, FeedbackComponent, FeedbackLinkComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(CurrentProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('testing Subscription()', () => {
    it('should emit values', () => {
        component.projects$.subscribe({
            next: (response) => {
                expect(response).toBeTruthy();
                expect(response.title).toBe('Technical Design lead, British Airways')
            }
        })
    })
  })
});
