import { Component, inject, input, InputSignal } from '@angular/core';

import { GlobalDataService } from '../global-data.service';
import { skillsHighlightAnimation } from '../utils/animations/skills.animation';

@Component({
    selector: 'app-skill-pills',
    templateUrl: './skill-pills.component.html',
    styleUrls: ['./skill-pills.component.scss'],
    animations: [skillsHighlightAnimation()],
    standalone: false
})
export class SkillPillsComponent {
    public skills: InputSignal<string[]> = input<string[]>(['']);
    public skillsType: InputSignal<string> = input<string>('');
    public size: InputSignal<string> = input<string>('');
    public showLink: InputSignal<boolean> = input<boolean>(false);
    public _globalService: GlobalDataService = inject(GlobalDataService);
}
