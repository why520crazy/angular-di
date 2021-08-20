import { FactoryProvider, Injectable, InjectionToken, Inject } from '@angular/core';

export const TOKEN = new InjectionToken('token');
export const TOKEN_OBJECT = {};
export const TOKEN_STR = 'str-token';
export const TOKEN_FACTORY = new InjectionToken('factory-token', {
    providedIn: 'root',
    factory: () => {
        return 'I am from InjectionToken factory';
    }
});

@Injectable()
export class Logger {
    message = 'I am logger!';
}

@Injectable()
export class ClassProviderSample {
    constructor(private logger: Logger) {}
    message = 'I am class provider!';
}

@Injectable()
export class ExistingClassProviderSample {
    message = 'I am existing class provider!';
}

let i = 1;
export function factoryProviderSample(logger: Logger) {
    return {
        message: `I am factory provider(${i++})!, deps logger: ${logger.message}`
    };
}

// export const factoryProviderSampleProvider: FactoryProvider = {
//     provide: TOKEN,
//     useFactory: factoryProviderSample
// };

// @Injectable()
export class LoggerWithoutInjectable {
    message = 'I am logger without injectable!';
}
