import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareIconButtonComponent } from './share-icon-button.component';

describe('ShareIconButtonComponent', () => {
  let component: ShareIconButtonComponent;
  let fixture: ComponentFixture<ShareIconButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ShareIconButtonComponent]
    });
    fixture = TestBed.createComponent(ShareIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Testing createShareUrl', () => {
    it('should share to facebook when configured for facebook', () => {
      fixture.componentRef.setInput('shareType', 'facebook');

      component['createShareUrl']();

      expect(component['navUrl']).toBe('http://www.facebook.com/sharer.php?u=');
    });

    it('should share to X when configured for X', () => {
      fixture.componentRef.setInput('shareType', 'X');

      component['createShareUrl']();

      expect(component['navUrl']).toBe('http://twitter.com/share?url=');
    });

    it('should share to linkedIn when configured for linkedIn', () => {
      fixture.componentRef.setInput('shareType', 'linkedin');

      component['createShareUrl']();

      expect(component['navUrl']).toBe('https://www.linkedin.com/shareArticle?mini=true&url=');
    });
  });

  describe('Testing shareContent()', () => {
    it('should call window open when triggered', () => {
      const spyWindow = spyOn(window, 'open');

      component.shareContent();

      expect(spyWindow).toHaveBeenCalled();
    })
  })
});
