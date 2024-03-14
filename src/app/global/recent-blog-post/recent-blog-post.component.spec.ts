import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentBlogPostComponent } from './recent-blog-post.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

const fakeActivatedRoute = {
  queryParams: of({ }),
} as ActivatedRoute;

describe('RecentBlogPostComponent', () => {
  let component: RecentBlogPostComponent;
  let fixture: ComponentFixture<RecentBlogPostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RecentBlogPostComponent],
      providers:  [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        }
      ]
    });
    fixture = TestBed.createComponent(RecentBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
