import { Component, OnInit, SkipSelf } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-resolution-skipself',
    templateUrl: './skipself.component.html',
    styleUrls: ['./skipself.component.scss'],
    providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }]
})
export class SkipselfComponent implements OnInit {
    constructor(@SkipSelf() public flower: FlowerService) {}

    ngOnInit(): void {}
}
