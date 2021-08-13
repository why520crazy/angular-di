import { Injectable, InjectionToken, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UserHomeComponent } from './home/home.component';
import { ClassProviderSample, ExistingClassProviderSample, factoryProviderSample, Logger, TOKEN } from './provider';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { ProtectedResolversModule } from './protected.module';

@NgModule({
    declarations: [UserHomeComponent],
    providers: [
        Logger,
        {
            provide: TOKEN,
            useClass: ClassProviderSample
        },
        // {
        //     provide: TOKEN,
        //     useValue: {
        //         message: 'I am object provider!'
        //     }
        // },
        // ExistingClassProviderSample,
        // {
        //     provide: TOKEN,
        //     useExisting: ExistingClassProviderSample
        // },
        // {
        //     provide: TOKEN,
        //     useFactory: factoryProviderSample,
        //     deps: [Logger]
        // }
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
        SharedModule,
        CoreModule
    ]
})
export class UserModule {}
