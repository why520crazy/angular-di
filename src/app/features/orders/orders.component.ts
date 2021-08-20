import { Component, OnInit } from '@angular/core';
import { OnlyForUserModuleService } from '../user/for-user-module.service';

@Component({
    selector: 'app-orders',
    templateUrl: './orders.component.html',
    styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
    constructor(private onlyForUserModuleService: OnlyForUserModuleService) {}

    ngOnInit(): void {}
}
