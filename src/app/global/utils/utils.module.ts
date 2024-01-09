import { NgModule } from '@angular/core';
import { AltTextPipe } from './pipes/alt-text.pipe';
import { LogoPipe } from './pipes/logo.pipe';
import { PillPipe } from './pipes/pill.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterLinkPipe } from './pipes/filter-link.pipe';
import { InfoDirective } from './directives/info.directive';
import { NavigationTextPipe } from './pipes/navigation-text.pipe';



@NgModule({
    declarations: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe, InfoDirective, NavigationTextPipe],
    exports: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe, InfoDirective, NavigationTextPipe]
})
export class UtilsModule { }
