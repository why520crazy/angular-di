import { Injectable } from '@angular/core';
import { Logger } from './logger.service';

let count = 0;

@Injectable()
export class Counter {
    count!: number;

    constructor(private logger: Logger) {
        this.count = ++count;
    }
}
