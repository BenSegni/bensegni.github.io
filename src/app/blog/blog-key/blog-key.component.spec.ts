import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogKeyComponent } from './blog-key.component';
import { BlogKeyLevelIconComponent } from '../blog-key-level-icon/blog-key-level-icon.component';
import { LogoPipe } from '../../global/utils/pipes/logo/logo.pipe';
import { AltTextPipe } from '../../global/utils/pipes/alt-text/alt-text.pipe';
import { RouterTestingModule } from '@angular/router/testing';

describe('BlogKeyComponent', () => {
  let component: BlogKeyComponent;
  let fixture: ComponentFixture<BlogKeyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        BlogKeyComponent,
        BlogKeyLevelIconComponent,
        LogoPipe,
        AltTextPipe
      ],
      imports: [RouterTestingModule]
    });
    fixture = TestBed.createComponent(BlogKeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
