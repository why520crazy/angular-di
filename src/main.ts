import { enableProdMode, Injectable } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Logger } from './app/core/logger.service';
import { StaticService } from './app/static.service';
import { environment } from './environments/environment';

if (environment.production) {
    enableProdMode();
}

platformBrowserDynamic([
    {
        provide: StaticService,
        useClass: StaticService
    }
])
    .bootstrapModule(AppModule)
    .catch((err) => console.error(err));
