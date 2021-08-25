import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';

@NgModule({
    declarations: [ViewComponent],
    imports: [CommonModule, SharedModule],
    exports: [ViewComponent]
})
export class AdvanceModule {}
