import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticlesComponent } from './blog-articles.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleChange } from '@angular/core';
import { blogData } from 'src/app/global/data/blog-data';

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
        FilterPipe
      ],
      imports: [RouterTestingModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(BlogArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
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
