import { inject, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class MessageService {
    message$ = new BehaviorSubject<string>('Hello Angular!');

    setValue(value: string) {
        this.message$.next(value);
    }
}


export function useMessage() {
    return inject(MessageService);
}
