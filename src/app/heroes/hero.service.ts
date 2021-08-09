import { Injectable } from '@angular/core';
import { Logger } from '../core/logger.service';
import { HEROES } from './mock-heroes';


// v1
@Injectable({
    // declares that this service should be created
    // by the root application injector.
    providedIn: 'root'
})
export class HeroService {
    constructor() {}

    getHeroes() {
        return HEROES;
    }
}







// v2
// @Injectable({
//     // declares that this service should be created
//     // by the root application injector.
//     providedIn: 'root'
// })
// export class HeroService {
//     constructor(private logger: Logger) {}

//     getHeroes() {
//         this.logger.log('Getting heroes ...');
//         return HEROES;
//     }
// }
