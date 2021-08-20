import { Component, Host, OnInit, Optional, Self } from '@angular/core';
import { FlowerService } from '../flower.service';

@Component({
    selector: 'app-resolution-host',
    templateUrl: './host.component.html',
    styleUrls: ['./host.component.scss'],
    providers: [{ provide: FlowerService, useValue: { emoji: '🌼' } }]
})
export class HostComponent implements OnInit {
    constructor(@Host() @Optional() public flower?: FlowerService) {}

    ngOnInit(): void {}
}

@Component({
    selector: 'app-resolution-host-child',
    template: '<p>Emoji from FlowerService: {{flower?.emoji || "None"}}</p>',
    providers: [{ provide: FlowerService, useValue: { emoji: '🌻' } }]
})
export class HostChildComponent implements OnInit {
    constructor(@Host() @Optional() public flower?: FlowerService) {}

    ngOnInit(): void {}
}
