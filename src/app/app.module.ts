import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { Logger } from './core/logger.service';
import { CustomersModule } from './features/customers/customers.module';
import { OrdersModule } from './features/orders/orders.module';
import { UserModule } from './features/user/user.module';
// import { MultistageModule } from './features/multistage/multistage.module';
import { RootService } from './root.service';
import { SharedModule } from './shared/shared.module';
import { StaticService } from './static.service';
import { HeroesModule } from './heroes/heros.module';

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, CoreModule, AppRoutingModule, SharedModule, HeroesModule],
    providers: [
        // StaticService,
        // RootService,
        // {
        //     provide: Logger,
        //     useValue: {
        //         name: 'AppModule provider Logger'
        //     }
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
