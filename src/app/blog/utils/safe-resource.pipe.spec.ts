import { DomSanitizer } from '@angular/platform-browser';
import { SafeResourcePipe } from './safe-resource.pipe';
import { TestBed } from '@angular/core/testing';

describe('SafeResourcePipe', () => {
  it('create an instance', () => {
    const domSanitizer = TestBed.inject(DomSanitizer);
    const pipe = new SafeResourcePipe(domSanitizer);
    expect(pipe).toBeTruthy();
  });
});
