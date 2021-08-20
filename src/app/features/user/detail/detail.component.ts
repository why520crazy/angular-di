import { Component, Inject, OnInit } from '@angular/core';
import { ClassProviderSample, TOKEN } from '../provider';

@Component({
    selector: 'app-user-detail',
    templateUrl: './detail.component.html',
    styleUrls: ['./detail.component.scss']
})
export class UserDetailComponent implements OnInit {
    constructor(@Inject(TOKEN) public sample: ClassProviderSample) {}

    ngOnInit(): void {}
}
