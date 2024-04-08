import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinkedinShareIconComponent } from './linkedin-share-icon.component';

describe('LinkedinShareIconComponent', () => {
  let component: LinkedinShareIconComponent;
  let fixture: ComponentFixture<LinkedinShareIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LinkedinShareIconComponent]
    });
    fixture = TestBed.createComponent(LinkedinShareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
