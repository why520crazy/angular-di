import { Component, Inject, Injector, OnInit, Optional } from '@angular/core';
import { ClassProviderSample, ExistingClassProviderSample, TOKEN } from '../provider';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    viewProviders: [],
    providers:[]
})
export class UserHomeComponent implements OnInit {
    message!: string;
    constructor(
        @Inject(TOKEN) public sample: ClassProviderSample,
        @Optional() private existingClass: ExistingClassProviderSample,
        private injector: Injector
    ) {
        if (existingClass === sample) {
            this.message = `Inject TOKEN === ExistingClassProviderSample`;
        }
        debugger;
    }

    ngOnInit(): void {}
}
