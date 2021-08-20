import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders.component';
import { Logger } from '../../core/logger.service';

@NgModule({
    declarations: [OrdersComponent],
    imports: [CommonModule],
    providers: [
        // {
        //     provide: Logger,
        //     useValue: { name: 'Orders Logger' }
        // }
    ]
})
export class OrdersModule {}
