import { Component, Injectable, Inject, Injector, OnInit, Optional, ViewContainerRef, ElementRef } from '@angular/core';
import { Counter } from '../../../core/counter.service';
import { RootService } from '../../../root.service';
import { OnlyForUserModuleService } from '../for-user-module.service';
import { ClassProviderSample, ExistingClassProviderSample, Logger, TOKEN } from '../provider';

@Component({
    selector: 'app-user-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: []
})
export class UserHomeComponent implements OnInit {
    message!: string;
    constructor(
        @Inject(TOKEN) public sample: ClassProviderSample,
        @Optional() private existingClass: ExistingClassProviderSample,
        private injector: Injector,
        public counter: Counter,
        public rootService: RootService,
        private onlyForUserModuleService: OnlyForUserModuleService
    ) {
        if (existingClass === sample) {
            this.message = `Inject TOKEN === ExistingClassProviderSample`;
        }
    }

    ngOnInit(): void {}
}
