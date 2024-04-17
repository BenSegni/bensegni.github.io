import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotFoundComponent } from './page-not-found.component';
import { AltTextPipe } from '../utils/pipes/alt-text.pipe';
import { Router } from '@angular/router';

describe('PageNotFoundComponent', () => {
  let component: PageNotFoundComponent;
  let fixture: ComponentFixture<PageNotFoundComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageNotFoundComponent, AltTextPipe],
      providers: [
        {
          provide: Router,
          useValue: {
            routerState: {
              snapshot: {
                url: '/under-construction'
              }
            }
          }
        }
      ]
    });
    fixture = TestBed.createComponent(PageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing OnInit', () => {
    it('should save to different page title when under construction', () => {
      expect(component.pageTitle).toBe('Sorry, but this page is under Construction!');
      expect(component.guidance).toBe('Whilst this is being built, take a look around via the');
    });
  })
});
