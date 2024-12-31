import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehanceIconComponent } from '../icons/behance-icon/behance-icon.component';
import { ProjectLinkComponent } from './project-link.component';
import { SimpleChange } from '@angular/core';
import { showcaseData } from '../data/showcase-data';

describe('ProjectLinkComponent', () => {
  let component: ProjectLinkComponent;
  let fixture: ComponentFixture<ProjectLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLinkComponent, BehanceIconComponent]
    });
    fixture = TestBed.createComponent(ProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Testing ngOnChanges', () => {
    it('should set link to medium', () => {
      component.ngOnChanges({
        project: new SimpleChange(showcaseData[1], showcaseData[2], true)
      });

      fixture.detectChanges();

      expect(component['checkIfMediumLink']()).toBeFalsy();
    });
    it('should set link to download link', () => {
      component.ngOnChanges({
        project: new SimpleChange(showcaseData[8], showcaseData[8], true)
      });

      fixture.detectChanges();

      expect(component.link).toBe('');
    });
  });

  describe('Testing openLink()', () => {
    it('should open the link in a new window', () => {
      const spyWindow = spyOn(window, 'open');

      component.openLink('www.bbc.com');

      expect(spyWindow).toHaveBeenCalledWith('www.bbc.com', '_blank');
    })
  })
});
