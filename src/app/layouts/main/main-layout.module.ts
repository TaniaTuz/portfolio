import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainModule } from '../../pages/main/main.module';
import { SharedModule } from '../../shared/shared.module';
import { MainLayoutComponent } from './main-layout.component';
import { MaterialModule } from '../../app.module';

@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainModule,
        MaterialModule
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class MainLayoutModule { }
