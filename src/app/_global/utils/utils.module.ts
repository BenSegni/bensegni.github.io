import { NgModule } from '@angular/core';
import { AltTextPipe } from './pipes/alt-text.pipe';
import { LogoPipe } from './pipes/logo.pipe';
import { PillPipe } from './pipes/pill.pipe';



@NgModule({
    declarations: [AltTextPipe, LogoPipe, PillPipe],
    exports: [AltTextPipe, LogoPipe, PillPipe]
})
export class UtilsModule { }
