import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogKeyLevelIconComponent } from './blog-key-level-icon.component';

describe('BlogKeyLevelIconComponent', () => {
  let component: BlogKeyLevelIconComponent;
  let fixture: ComponentFixture<BlogKeyLevelIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogKeyLevelIconComponent]
    });
    fixture = TestBed.createComponent(BlogKeyLevelIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
