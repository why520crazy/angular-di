import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ViewComponent } from './view/view.component';
import { ForwardRefComponent, ForwardRefChildComponent } from './forward-ref/forward-ref.component';
@NgModule({
    declarations: [ViewComponent, ForwardRefComponent, ForwardRefChildComponent],
    imports: [CommonModule, SharedModule],
    exports: [ViewComponent]
})
export class AdvanceModule {}
