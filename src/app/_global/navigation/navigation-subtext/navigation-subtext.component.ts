import { Component, Input } from '@angular/core';
import { NavigationItem } from '../interface/navigation';

@Component({
  selector: 'app-navigation-subtext',
  templateUrl: './navigation-subtext.component.html',
  styleUrls: ['./navigation-subtext.component.scss']
})
export class NavigationSubtextComponent {
    @Input() item: NavigationItem | undefined;
    public pathIcon = '../../assets/img/link_icon.svg'
}
