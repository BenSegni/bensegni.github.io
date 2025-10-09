import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSynopsisComponent } from './project-synopsis.component';

describe('ProjectSynopsisComponent', () => {
  let component: ProjectSynopsisComponent;
  let fixture: ComponentFixture<ProjectSynopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectSynopsisComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjectSynopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
