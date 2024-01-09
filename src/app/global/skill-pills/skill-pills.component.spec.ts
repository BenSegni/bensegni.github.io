import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillPillsComponent } from './skill-pills.component';
import { PillPipe } from '../utils/pipes/pill.pipe';

describe('SkillPillsComponent', () => {
  let component: SkillPillsComponent;
  let fixture: ComponentFixture<SkillPillsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SkillPillsComponent, PillPipe]
    });
    fixture = TestBed.createComponent(SkillPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
