import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleComponent } from './blog-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { blogData } from 'src/app/global/data/blog-data';
import { RouterTestingModule } from '@angular/router/testing';

declare let process: any;
let env = process.env.NODE_ENV;

describe('BlogArticleComponent', () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogArticleComponent],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    env = 'production'
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing getContent()', () => {
    it('should return the correct article', () => {
      component.article = blogData[1];
      const spyService = spyOn<any>(component['_blogService'], 'assignBlogContent').and.returnValue(of('../../../assets/blog-content/sass-params.html'));

      component['getContent']();

      expect(spyService).toHaveBeenCalled()
    })
  });

  describe('copyURL()', () => {
    it('should copy the url to clipboard', () => {
      const spyNavigator = spyOn(navigator.clipboard, 'writeText').and.resolveTo();

      component.copyURL();

      expect(spyNavigator).toHaveBeenCalledWith('http://localhost:4200/');
    })
  });
});
