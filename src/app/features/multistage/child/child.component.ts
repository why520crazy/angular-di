import { Component, OnInit } from '@angular/core';
import { AnimalService } from '../animal.service';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-resolution-child',
    templateUrl: './child.component.html',
    styleUrls: ['./child.component.scss'],
    // use the providers array to provide a service
    providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }],
    viewProviders: [{ provide: AnimalService, useValue: { emoji: '🐶' } }]
})
export class ChildComponent implements OnInit {
    // inject the service
    constructor(public flower: FlowerService, public animal: AnimalService) {}

    ngOnInit(): void {}
}
