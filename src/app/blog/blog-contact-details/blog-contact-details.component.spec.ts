import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogContactDetailsComponent } from './blog-contact-details.component';

describe('BlogContactDetailsComponent', () => {
  let component: BlogContactDetailsComponent;
  let fixture: ComponentFixture<BlogContactDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BlogContactDetailsComponent]
    });
    fixture = TestBed.createComponent(BlogContactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
