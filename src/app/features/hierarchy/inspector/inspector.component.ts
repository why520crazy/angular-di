import { Component, Directive, Input, OnInit, Optional } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

@Component({
    selector: 'app-hierarchy-inspector',
    templateUrl: './inspector.component.html',
    styleUrls: ['./inspector.component.scss']
})
export class HierarchyInspectorComponent implements OnInit {
    constructor(@Optional() public hierarchyService: HierarchyService) {}

    ngOnInit(): void {}
}

@Directive({
    selector: '[appHierarchyInspector]',
    exportAs: 'inspector'
})
export class HierarchyInspectorDirective implements OnInit {
    @Input() name!: string;

    constructor(@Optional() public hierarchyService: HierarchyService) {}

    ngOnInit(): void {
        console.log(`appHierarchyInspector emoji: ${this.hierarchyService?.emoji || 'None'} from ${this.name}`);
    }
}
