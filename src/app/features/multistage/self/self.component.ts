import { Component, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-resolution-self',
    templateUrl: './self.component.html',
    styleUrls: ['./self.component.scss'],
    // providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class SelfComponent implements OnInit {
    constructor(@Optional() @Self() public flower: FlowerService) {}

    ngOnInit(): void {}
}
