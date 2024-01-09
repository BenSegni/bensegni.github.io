import { ElementRef, Renderer2 } from '@angular/core';
import { InfoDirective } from './info.directive';

describe('InfoDirective', () => {
    let renderer: Renderer2;
    let el: ElementRef;
  it('should create an instance', () => {
    const directive = new InfoDirective(el, renderer);
    expect(directive).toBeTruthy();
  });
});
