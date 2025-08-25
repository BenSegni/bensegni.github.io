import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter',
    standalone: false
})
export class FilterPipe implements PipeTransform {
    transform(options: string[]): boolean {
        return options[0] === options[1];
    }

}
