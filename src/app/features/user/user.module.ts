import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './home/home.component';
import { ClassProviderSample, ExistingClassProviderSample, factoryProviderSample, Logger, TOKEN } from './provider';

@NgModule({
    declarations: [UserHomeComponent],
    providers: [
        Logger,
        {
            provide: TOKEN,
            useClass: ClassProviderSample
        },
        {
            provide: TOKEN,
            useValue: {
                message: 'I am object provider!'
            }
        },
        ExistingClassProviderSample,
        {
            provide: TOKEN,
            useExisting: ExistingClassProviderSample
        },
        {
            provide: TOKEN,
            useFactory: factoryProviderSample,
            deps: [Logger]
        }
    ],
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: UserHomeComponent
            }
        ]),
        CommonModule
    ]
})
export class UserModule {}
