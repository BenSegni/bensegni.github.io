import { NgModule } from '@angular/core';
import { AltTextPipe } from './pipes/alt-text.pipe';
import { LogoPipe } from './pipes/logo.pipe';
import { PillPipe } from './pipes/pill.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterLinkPipe } from './pipes/filter-link.pipe';
import { InfoDirective } from './directives/info-directive/info.directive';



@NgModule({
    declarations: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe, InfoDirective],
    exports: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe, InfoDirective]
})
export class UtilsModule { }
