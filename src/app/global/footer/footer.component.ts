import { ChangeDetectionStrategy, Component, input, InputSignal, WritableSignal } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class FooterComponent {
    public version: InputSignal<string> = input<string>('1.0.0');
}
