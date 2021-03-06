import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesComponent } from './messages/messages.component';
import { ThyNavModule } from 'ngx-tethys/nav';
import { ThyLayoutModule } from 'ngx-tethys/layout';
import { ThyDividerModule } from 'ngx-tethys/divider';

const TETHYS_MODULES = [ThyNavModule, ThyLayoutModule, ThyDividerModule];

@NgModule({
    declarations: [MessagesComponent],
    imports: [CommonModule, ...TETHYS_MODULES],
    exports: [MessagesComponent, ...TETHYS_MODULES]
})
export class SharedModule {}
