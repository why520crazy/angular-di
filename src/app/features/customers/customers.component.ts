import { Component, OnInit } from '@angular/core';
import { Logger } from '../../core/logger.service';
import { OnlyForUserModuleService } from '../user/for-user-module.service';

@Component({
    selector: 'app-customers',
    templateUrl: './customers.component.html',
    styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
    constructor(public logger: Logger) {}

    ngOnInit(): void {}
}
