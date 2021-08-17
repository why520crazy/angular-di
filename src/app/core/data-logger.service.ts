import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

@Injectable({
    providedIn: 'root'
})
export class DateLogger extends Logger {
    log(msg: any) {
        super.log(stamp(msg));
    }
}

function stamp(msg: any) {
    return msg + ' at ' + new Date();
}
