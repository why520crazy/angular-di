import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from './counter.service';

@NgModule({
    declarations: [],
    imports: [CommonModule],
    providers: [Counter]
})
export class CoreModule {}
