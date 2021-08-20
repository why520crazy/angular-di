import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MultistageHomeComponent } from './home/home.component';
import { CoreModule } from '../../core/core.module';
import { RouterModule } from '@angular/router';
import { Logger } from '../../core/logger.service';
import { RootService } from '../../root.service';
import { SharedModule } from '../../shared/shared.module';
import { SelfNoDataComponent } from './self-no-data/self-no-data.component';
import { SelfComponent } from './self/self.component';
import { SkipselfComponent } from './skipself/skipself.component';
import { HostChildComponent, HostComponent } from './host/host.component';
import { FlowerComponent } from './flower/flower.component';
import { ChildComponent } from './child/child.component';
import { InspectorComponent } from './inspector/inspector.component';

@NgModule({
    declarations: [
        MultistageHomeComponent,
        SelfNoDataComponent,
        SelfComponent,
        SkipselfComponent,
        HostComponent,
        HostChildComponent,
        FlowerComponent,
        ChildComponent,
        InspectorComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: MultistageHomeComponent
            }
        ]),
        SharedModule
        // CoreModule
    ],
    providers: []
})
export class MultistageModule {}
