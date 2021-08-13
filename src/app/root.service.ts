import { Injectable } from '@angular/core';


let index = 0;

@Injectable()
export class RootService {
    index!: number;

    constructor() {
        this.index = ++index;
    }
}
