import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIconsComponent } from './share-icons.component';

describe('ShareIconsComponent', () => {
  let component: ShareIconsComponent;
  let fixture: ComponentFixture<ShareIconsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShareIconsComponent]
    });
    fixture = TestBed.createComponent(ShareIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
