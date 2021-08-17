import { Component, OnInit } from '@angular/core';
import { HierarchyService } from '../hierarchy.service';

@Component({
    selector: 'app-hierarchy-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [
        // {
        //     provide: HierarchyService,
        //     useValue: {
        //         emoji: '🌼'
        //     }
        // }
    ]
})
export class HierarchyHomeComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}
}
