import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmIconComponent } from './npm-icon.component';

describe('NpmIconComponent', () => {
  let component: NpmIconComponent;
  let fixture: ComponentFixture<NpmIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpmIconComponent]
    });
    fixture = TestBed.createComponent(NpmIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
