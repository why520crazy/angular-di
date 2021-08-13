import { Injectable } from '@angular/core';
import { Logger } from './core/logger.service';

@Injectable()
export class StaticService {
    constructor(public logger: Logger) {
    }
}
