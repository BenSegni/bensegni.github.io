import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogComponent } from './blog.component';
import { SharedFilterComponent } from '../../global/shared-filter/shared-filter.component';
import { BlogKeyComponent } from '../blog-key/blog-key.component';
import { BlogPostComponent } from '../blog-post/blog-post.component';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { SkillPillsComponent } from '../../global/skill-pills/skill-pills.component';
import { RouterTestingModule } from '@angular/router/testing';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';
import { FilterPipe } from '../../global/utils/pipes/filter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BlogKeyLevelIconComponent } from '../blog-key-level-icon/blog-key-level-icon.component';

describe('BlogComponent', () => {
  let component: BlogComponent;
  let fixture: ComponentFixture<BlogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogComponent,
        SharedFilterComponent,
        BlogKeyComponent,
        BlogPostComponent,
        LogoPipe,
        AltTextPipe,
        SkillPillsComponent,
        PillPipe,
        FilterPipe,
        BlogKeyLevelIconComponent
      ],
      imports: [RouterTestingModule, BrowserAnimationsModule]
    });
    fixture = TestBed.createComponent(BlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
