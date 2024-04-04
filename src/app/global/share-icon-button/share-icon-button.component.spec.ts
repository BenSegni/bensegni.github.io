import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIconButtonComponent } from './share-icon-button.component';

describe('ShareIconButtonComponent', () => {
  let component: ShareIconButtonComponent;
  let fixture: ComponentFixture<ShareIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareIconButtonComponent]
    });
    fixture = TestBed.createComponent(ShareIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
