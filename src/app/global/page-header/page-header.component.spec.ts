import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageHeaderComponent } from './page-header.component';
import { LocationIconComponent } from '../icons/location-icon/location-icon.component';
import { LogoPipe } from '../utils/pipes/logo.pipe';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';

describe('PageHeaderComponent', () => {
  let component: PageHeaderComponent;
  let fixture: ComponentFixture<PageHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageHeaderComponent, LocationIconComponent, LogoPipe, AltTextPipe]
    });
    fixture = TestBed.createComponent(PageHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
