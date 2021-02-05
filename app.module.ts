import { DefaultTreeViewComponent } from './default.component';

import { HttpModule, JsonpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import 'rxjs/add/operator/map';
import { NgModule, ModuleWithProviders, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule } from "@angular/common";












import { SharedModule } from './common/shared.module';





@NgModule({
    imports: [SharedModule , CommonModule, BrowserModule, HttpModule, JsonpModule, BrowserModule],
declarations: [DefaultTreeViewComponent],
bootstrap: [DefaultTreeViewComponent]
})
export class AppModule { }