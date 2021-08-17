import { FactoryProvider, Injectable, InjectionToken } from '@angular/core';

// export const TOKEN = new InjectionToken('token');
export const TOKEN = 'a';
// export const TOKEN = {};

@Injectable()
export class Logger {
    message = 'I am logger!';
}

@Injectable()
export class ClassProviderSample {
    constructor() {}
    message = 'I am class provider!';
}

@Injectable()
export class ExistingClassProviderSample {
    message = 'I am existing class provider!';
}

export function factoryProviderSample(logger: Logger) {
    return {
        message: `I am factory provider!, deps logger: ${logger.message}`
    };
}

// export const factoryProviderSampleProvider: FactoryProvider = {
//     provide: TOKEN,
//     useFactory: factoryProviderSample
// };
