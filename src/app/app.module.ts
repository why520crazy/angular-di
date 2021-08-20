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
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { RootService } from './root.service';
import { SharedModule } from './shared/shared.module';
import { StaticService } from './static.service';

@NgModule({
    declarations: [AppComponent, HeroListComponent, HeroComponent],
    imports: [BrowserModule, CoreModule, AppRoutingModule, SharedModule],
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
