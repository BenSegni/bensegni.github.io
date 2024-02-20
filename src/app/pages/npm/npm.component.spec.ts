import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmComponent } from './npm.component';

describe('NpmComponent', () => {
  let component: NpmComponent;
  let fixture: ComponentFixture<NpmComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NpmComponent]
    });
    fixture = TestBed.createComponent(NpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
