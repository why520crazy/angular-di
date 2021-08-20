import { forwardRef, Inject, Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './home/home.component';
import {
    ClassProviderSample,
    ExistingClassProviderSample,
    factoryProviderSample,
    Logger,
    TOKEN,
    LoggerWithoutInjectable,
    TOKEN_STR,
    TOKEN_OBJECT
} from './provider';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { ProtectedResolversModule } from './protected.module';
import { UserDetailComponent } from './detail/detail.component';
import { AppModule } from '../../app.module';

@NgModule({
    declarations: [UserHomeComponent, UserDetailComponent],
    providers: [
        Logger,
        {
            provide: TOKEN,
            useClass: ClassProviderSample,
            deps: []
        },
        // {
        //     provide: TOKEN,
        //     useValue: {
        //         message: 'I am object provider!'
        //     }
        // },
        { provide: LoggerWithoutInjectable },
        ExistingClassProviderSample,
        // {
        //     provide: TOKEN,
        //     useExisting: ExistingClassProviderSample
        // },
        // {
        //     provide: TOKEN,
        //     useFactory: factoryProviderSample,
        //     deps: [Logger]
        // },
        {
            provide: TOKEN_STR,
            useValue: 'I am string token value'
        },
        {
            provide: TOKEN_OBJECT,
            useValue: 'I am object token value'
        }
    ],
    imports: [
        ProtectedResolversModule,
        RouterModule.forChild([
            {
                path: '',
                component: UserHomeComponent
            }
        ]),
        CommonModule,
        SharedModule
        // CoreModule
    ]
})
export class UserModule {
    constructor(private module: AppModule) {}
}
