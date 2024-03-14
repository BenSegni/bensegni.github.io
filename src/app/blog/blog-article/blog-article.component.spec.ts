import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogArticleComponent } from './blog-article.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BlogArticleComponent', () => {
  let component: BlogArticleComponent;
  let fixture: ComponentFixture<BlogArticleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogArticleComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(BlogArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
