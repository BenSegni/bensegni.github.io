import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogLevelDescriptionsComponent } from './blog-level-descriptions.component';
import { ActivatedRoute } from '@angular/router';
import { AltTextPipe } from '../../global/utils/pipes/alt-text/alt-text.pipe';
import { of } from 'rxjs';
import { AnchorPipe } from '../utils/anchor.pipe';
import { BlogKeyLevelIconComponent } from '../blog-key-level-icon/blog-key-level-icon.component';
import { LogoPipe } from '../../global/utils/pipes/logo/logo.pipe';

const fakeActivatedRoute = {
  fragment: of({ }),
} as ActivatedRoute;

describe('BlogLevelDescriptionsComponent', () => {
  let component: BlogLevelDescriptionsComponent;
  let fixture: ComponentFixture<BlogLevelDescriptionsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogLevelDescriptionsComponent,
        AltTextPipe,
        AnchorPipe,
        BlogKeyLevelIconComponent,
        LogoPipe
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: fakeActivatedRoute
        }
      ]
    });
    fixture = TestBed.createComponent(BlogLevelDescriptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
