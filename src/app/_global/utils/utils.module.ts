import { NgModule } from '@angular/core';
import { AltTextPipe } from './pipes/alt-text.pipe';
import { LogoPipe } from './pipes/logo.pipe';
import { PillPipe } from './pipes/pill.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { FilterLinkPipe } from './pipes/filter-link.pipe';



@NgModule({
    declarations: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe],
    exports: [AltTextPipe, LogoPipe, PillPipe, FilterPipe, FilterLinkPipe]
})
export class UtilsModule { }
