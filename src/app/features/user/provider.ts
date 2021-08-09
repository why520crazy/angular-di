import { FactoryProvider, Injectable, InjectionToken } from '@angular/core';

export const TOKEN = new InjectionToken('token');

@Injectable()
export class Logger {
    message = 'I am logger!';
}

@Injectable()
export class ClassProviderSample {
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
