import { Component, inject, input } from '@angular/core';

import { GlobalDataService } from '../global-data.service';
import { skillsHighlightAnimation } from '../utils/animations/skills.animation';

@Component({
  selector: 'app-skill-pills',
  templateUrl: './skill-pills.component.html',
  styleUrls: ['./skill-pills.component.scss'],
  animations: [skillsHighlightAnimation()]
})
export class SkillPillsComponent {
    public skills = input<string[]>(['']);
    public skillsType = input<string>('');
    public size = input<string>('');
    public showLink = input<boolean>(false);
    public _globalService = inject(GlobalDataService);
}
