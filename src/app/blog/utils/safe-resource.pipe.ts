import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'safeResource'
})
export class SafeResourcePipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) { }

  transform(resource: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(resource);;
  }

}
