import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisHeaderDisplayComponent } from './synopsis-header-display.component';

describe('SynopsisHeaderDisplayComponent', () => {
  let component: SynopsisHeaderDisplayComponent;
  let fixture: ComponentFixture<SynopsisHeaderDisplayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopsisHeaderDisplayComponent]
    });
    fixture = TestBed.createComponent(SynopsisHeaderDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
