import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class FooterComponent {
    public version = input<string>('1.0.0');
}
