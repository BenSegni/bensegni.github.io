import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisBackLinkComponent } from './synopsis-back-link.component';
import { AltTextPipe } from 'src/app/global/utils/pipes/alt-text.pipe';

describe('SynopsisBackLinkComponent', () => {
  let component: SynopsisBackLinkComponent;
  let fixture: ComponentFixture<SynopsisBackLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SynopsisBackLinkComponent, AltTextPipe]
    });
    fixture = TestBed.createComponent(SynopsisBackLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
