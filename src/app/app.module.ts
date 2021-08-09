import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
    declarations: [AppComponent, HeroListComponent, HeroComponent],
    imports: [BrowserModule, CoreModule, AppRoutingModule, SharedModule],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
