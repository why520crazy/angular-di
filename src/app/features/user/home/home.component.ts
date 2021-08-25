import { Component, Injectable, Inject, Injector, OnInit, Optional, ViewContainerRef, ElementRef, ComponentFactoryResolver } from '@angular/core';
import { Counter } from '../../../core/counter.service';
import { RootService } from '../../../root.service';
import { OnlyForUserModuleService } from '../for-user-module.service';
import {
    ClassProviderSample,
    ExistingClassProviderSample,
    Logger,
    TOKEN,
    LoggerWithoutInjectable,
    TOKEN_STR,
    TOKEN_OBJECT,
    TOKEN_FACTORY
} from '../provider';

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
        public counter: Counter,
        public rootService: RootService,
        public onlyForUserModuleService: OnlyForUserModuleService,
        public loggerWithoutInjectable: LoggerWithoutInjectable,
        @Inject(TOKEN_STR) public strValue: string,
        @Inject(TOKEN_OBJECT) public objectValue: string,
        @Inject(TOKEN_FACTORY) public tokenFactoryValue: string
    ) {
        if (existingClass === sample) {
            this.message = `Inject TOKEN === ExistingClassProviderSample`;
        }
    }

    ngOnInit(): void {}
}
