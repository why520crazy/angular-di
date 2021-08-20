import { Injectable } from '@angular/core';
import { ProtectedResolversModule } from './protected.module';

@Injectable({
    providedIn: ProtectedResolversModule
})
export class OnlyForUserModuleService {
    name = 'I am service only for UserModule';
}
