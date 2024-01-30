import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisBackLinkComponent } from './synopsis-back-link.component';

describe('SynopsisBackLinkComponent', () => {
  let component: SynopsisBackLinkComponent;
  let fixture: ComponentFixture<SynopsisBackLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopsisBackLinkComponent]
    });
    fixture = TestBed.createComponent(SynopsisBackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
