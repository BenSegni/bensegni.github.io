import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XShareIconComponent } from './x-share-icon.component';

describe('XShareIconComponent', () => {
  let component: XShareIconComponent;
  let fixture: ComponentFixture<XShareIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [XShareIconComponent]
    });
    fixture = TestBed.createComponent(XShareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
