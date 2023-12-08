import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentProjectsComponent } from './current-projects.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { FeedbackLinkComponent } from './feedback-link/feedback-link.component';
import { AltTextPipe } from '../../_global/utils/pipes/alt-text.pipe';
import { CurrentProjectHeaderComponent } from './current-project-header/current-project-header.component';
import { CurrentProjectPresentationComponent } from './current-project-presentation/current-project-presentation.component';
import { CurrentProjectDetailComponent } from './current-project-detail/current-project-detail.component';

describe('CurrentProjectsComponent', () => {
  let component: CurrentProjectsComponent;
  let fixture: ComponentFixture<CurrentProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        CurrentProjectsComponent,
        FeedbackComponent,
        FeedbackLinkComponent,
        AltTextPipe,
        CurrentProjectHeaderComponent,
        CurrentProjectPresentationComponent,
        CurrentProjectDetailComponent
    ]
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
                expect(response.title).toBe('Technical Design Lead, British Airways')
            }
        })
    })
  })
});
