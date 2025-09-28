import { Pipe, PipeTransform } from "@angular/core";

import { getPillColor } from "../maps/pill-maps";

@Pipe({
  name: "pill",
})
export class PillPipe implements PipeTransform {
  transform(value: string): string {
    return getPillColor(value);
  }
}
