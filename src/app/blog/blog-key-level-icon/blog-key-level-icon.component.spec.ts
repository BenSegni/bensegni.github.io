import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../../global/utils/pipes/alt-text.pipe';
import { BlogKeyLevelIconComponent } from './blog-key-level-icon.component';
import { LogoPipe } from '../../global/utils/pipes/logo.pipe';
import { PillPipe } from '../../global/utils/pipes/pill.pipe';

describe('BlogKeyLevelIconComponent', () => {
  let component: BlogKeyLevelIconComponent;
  let fixture: ComponentFixture<BlogKeyLevelIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogKeyLevelIconComponent, LogoPipe, PillPipe, AltTextPipe]
    });
    fixture = TestBed.createComponent(BlogKeyLevelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
