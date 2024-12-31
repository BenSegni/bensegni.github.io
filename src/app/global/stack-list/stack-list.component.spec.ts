import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackListComponent } from './stack-list.component';

describe('StackListComponent', () => {
  let component: StackListComponent<any>;
  let fixture: ComponentFixture<StackListComponent<any>>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StackListComponent]
    });
    fixture = TestBed.createComponent(StackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
