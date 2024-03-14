import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialMediaComponent } from './social-media.component';
import { BehanceIconComponent } from '../icons/behance-icon/behance-icon.component';
import { GithubIconComponent } from '../icons/github-icon/github-icon.component';
import { LinkedinIconComponent } from '../icons/linkedin-icon/linkedin-icon.component';
import { NpmIconComponent } from '../icons/npm-icon/npm-icon.component';
import { RecentBlogPostComponent } from '../recent-blog-post/recent-blog-post.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const fakeActivatedRoute = {
  queryParams: of({ }),
} as ActivatedRoute;

describe('SocialMediaComponent', () => {
  let component: SocialMediaComponent;
  let fixture: ComponentFixture<SocialMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SocialMediaComponent,
        BehanceIconComponent,
        GithubIconComponent,
        LinkedinIconComponent,
        NpmIconComponent
      ],
      imports: [RecentBlogPostComponent],
      providers: [{
        provide: ActivatedRoute,
        useValue: fakeActivatedRoute
      }]
    });
    fixture = TestBed.createComponent(SocialMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
