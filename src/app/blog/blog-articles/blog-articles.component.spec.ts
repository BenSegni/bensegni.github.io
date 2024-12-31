import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { BlogArticlesComponent } from './blog-articles.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterLinkPipe } from '../../global/utils/pipes/filter-link.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter.pipe';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { SimpleChange } from '@angular/core';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';

describe('BlogArticlesComponent', () => {
  let component: BlogArticlesComponent;
  let fixture: ComponentFixture<BlogArticlesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogArticlesComponent,
        BlogPostComponent,
        LogoPipe,
        AltTextPipe,
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        FilterLinkPipe
      ],
      imports: [RouterTestingModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(BlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Testing ngOnChanges', () => {
    it('should call assignBlogList()', () => {
      component.ngOnChanges({
        articleId: new SimpleChange(null, 1, true)
      });

      expect(component.blog$).toBeTruthy()
    });
  })
});
