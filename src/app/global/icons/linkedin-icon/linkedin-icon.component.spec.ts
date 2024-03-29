import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinIconComponent } from './linkedin-icon.component';

describe('LinkedinIconComponent', () => {
  let component: LinkedinIconComponent;
  let fixture: ComponentFixture<LinkedinIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinIconComponent]
    });
    fixture = TestBed.createComponent(LinkedinIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
