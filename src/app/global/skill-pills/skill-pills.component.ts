import { Component, Input } from '@angular/core';
import { GlobalDataService } from '../global-data.service';
import { skillsHighlightAnimation } from '../utils/animations/skills.animation';

@Component({
  selector: 'app-skill-pills',
  templateUrl: './skill-pills.component.html',
  styleUrls: ['./skill-pills.component.scss'],
  animations: [skillsHighlightAnimation()]
})
export class SkillPillsComponent {
    @Input() public skills: string[] | undefined;
    @Input() public skillsType = '';
    @Input() public size = '';
    @Input() public showLink = true;
    constructor(public _globalService: GlobalDataService) {}
}
