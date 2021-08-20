import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HierarchyHomeComponent } from './home/home.component';
import { HierarchyChildComponent } from './child/child.component';
import { HierarchyInspectorComponent, HierarchyInspectorDirective } from './inspector/inspector.component';

@NgModule({
    declarations: [HierarchyHomeComponent, HierarchyChildComponent, HierarchyInspectorComponent, HierarchyInspectorDirective],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: HierarchyHomeComponent
            }
        ])
    ]
})
export class HierarchyModule {}
