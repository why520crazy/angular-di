import { Component, OnInit, ContentChild, TemplateRef, Input } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

@Component({
    selector: 'app-hierarchy-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    viewProviders: [HierarchyService],
    providers: [HierarchyService]
})
export class HierarchyChildComponent implements OnInit {
    @ContentChild('tpl', { static: true }) template!: TemplateRef<HTMLElement>;

    @Input() inputTemplate!: TemplateRef<HTMLElement>;

    constructor() {}

    ngOnInit(): void {}
}
