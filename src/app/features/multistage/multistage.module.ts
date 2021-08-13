import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistageHomeComponent } from './home/home.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { Logger } from '../../core/logger.service';
import { RootService } from '../../root.service';

@NgModule({
    declarations: [MultistageHomeComponent],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MultistageHomeComponent
            }
        ]),
        CoreModule
    ],
    providers: []
})
export class MultistageModule {}
