import { Component, OnInit } from '@angular/core';
import { Counter } from '../../../core/counter.service';
import { RootService } from '../../../root.service';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-multistage-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class MultistageHomeComponent implements OnInit {
    constructor(public counter: Counter, public rootService: RootService, public flower: FlowerService, public animal: AnimalService) {}

    ngOnInit(): void {}
}
