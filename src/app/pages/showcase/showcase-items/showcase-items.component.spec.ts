import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowcaseItemsComponent } from './showcase-items.component';

describe('ShowcaseItemsComponent', () => {
  let component: ShowcaseItemsComponent;
  let fixture: ComponentFixture<ShowcaseItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShowcaseItemsComponent]
    });
    fixture = TestBed.createComponent(ShowcaseItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
