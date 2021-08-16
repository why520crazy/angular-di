import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';

let count = 1;
@Injectable({
    providedIn: "root"
})
export class Logger {
    name = `logger-${count++}`;

    constructor() {}

    log(message: string) {
        console.log(`[LOGGER] ${message} [${new Date()}]`);
    }
}
