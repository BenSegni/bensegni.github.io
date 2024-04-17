import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookShareIconComponent } from './facebook-share-icon.component';

describe('FacebookShareIconComponent', () => {
  let component: FacebookShareIconComponent;
  let fixture: ComponentFixture<FacebookShareIconComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FacebookShareIconComponent]
    });
    fixture = TestBed.createComponent(FacebookShareIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
