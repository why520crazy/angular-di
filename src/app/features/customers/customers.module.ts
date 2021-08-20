import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { Logger } from '../../core/logger.service';
import { TemplateRefComponent } from './template-ref/template-ref.component';

@NgModule({
    declarations: [CustomersComponent, TemplateRefComponent],
    imports: [CommonModule, CustomersRoutingModule],
    providers: [
        // {
        //     provide: Logger,
        //     useValue: { name: 'Customers Logger' }
        // }
    ],
    exports: [CustomersComponent]
})
export class CustomersModule {}
