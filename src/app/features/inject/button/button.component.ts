import { Component, Input, OnInit } from '@angular/core';
import { ClassBinding } from '../home/class-binding';

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

    @Input() @ClassBinding('thy-button-{{value}}') thyType!: 'primary' | 'success';

    constructor() {}

    ngOnInit(): void {}
}
