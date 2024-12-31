import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltTextPipe } from '../../../../global/utils/pipes/alt-text.pipe';
import { LogoPipe } from '../../../../global/utils/pipes/logo.pipe';
import { PillPipe } from '../../../../global/utils/pipes/pill.pipe';
import { PostEducationInsertComponent } from './post-education-insert.component';

describe('PostEducationInsertComponent', () => {
  let component: PostEducationInsertComponent;
  let fixture: ComponentFixture<PostEducationInsertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostEducationInsertComponent, LogoPipe, AltTextPipe, PillPipe]
    });
    fixture = TestBed.createComponent(PostEducationInsertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
