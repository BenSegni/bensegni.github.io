import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectLinkComponent } from './project-link.component';
import { SimpleChange } from '@angular/core';
import { showcaseData } from '../data/showcase-data';

describe('ProjectLinkComponent', () => {
  let component: ProjectLinkComponent;
  let fixture: ComponentFixture<ProjectLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectLinkComponent]
    });
    fixture = TestBed.createComponent(ProjectLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Testing ngOnChanges', () => {
    it('should call assignBlogList()', () => {
      component.ngOnChanges({
        project: new SimpleChange(showcaseData[1], showcaseData[2], true)
      });

      fixture.detectChanges();

      expect(component['checkIfMediumLink']()).toBeFalsy();
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
