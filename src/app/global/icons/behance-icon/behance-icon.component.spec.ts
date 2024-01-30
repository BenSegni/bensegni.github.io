import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehanceIconComponent } from './behance-icon.component';

describe('BehanceIconComponent', () => {
  let component: BehanceIconComponent;
  let fixture: ComponentFixture<BehanceIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BehanceIconComponent]
    });
    fixture = TestBed.createComponent(BehanceIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
