import { Component } from '@angular/core';

@Component({
    selector: 'app-scroll',
    templateUrl: './scroll.component.html'
})
export class ScrollComponent {
    public scroll(): void {
        window.scrollTo({top: 0, behavior: 'smooth'});
    }
}
