import { Component, OnInit } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-resolution-flower',
    templateUrl: './flower.component.html',
    styleUrls: ['./flower.component.scss']
})
export class FlowerComponent implements OnInit {
    constructor(public flower: FlowerService) {}

    ngOnInit(): void {}
}
