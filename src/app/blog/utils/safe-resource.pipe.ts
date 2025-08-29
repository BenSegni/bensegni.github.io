import { inject, Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({
  name: "safeResource",
  standalone: true,
})
export class SafeResourcePipe implements PipeTransform {
  private _sanitizer: DomSanitizer = inject(DomSanitizer);

  transform(resource: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(resource);
  }
}
