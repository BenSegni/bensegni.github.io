import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEducationInsertComponent } from './post-education-insert.component';

describe('PostEducationInsertComponent', () => {
  let component: PostEducationInsertComponent;
  let fixture: ComponentFixture<PostEducationInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostEducationInsertComponent]
    });
    fixture = TestBed.createComponent(PostEducationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
