import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetailsLinkComponent } from './project-details-link.component';

describe('ProjectDetailsLinkComponent', () => {
  let component: ProjectDetailsLinkComponent;
  let fixture: ComponentFixture<ProjectDetailsLinkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectDetailsLinkComponent]
    });
    fixture = TestBed.createComponent(ProjectDetailsLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
