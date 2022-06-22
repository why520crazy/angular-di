import { ChangeDetectorRef, Component, ElementRef, HostBinding, inject, Injectable, OnInit, ViewRef } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MessageService, useMessage } from '../message.service';
import { ClassBinding } from './class-binding';

export function untilDestroyed() {
    const destroy$ = new Subject<void>();

    const viewRef = inject(ChangeDetectorRef) as ViewRef;

    viewRef.onDestroy(() => {
        destroy$.next();
        destroy$.complete();
    });

    return takeUntil(destroy$.asObservable());
}

@Injectable()
class UpdateHostClassService {
    elementRef = inject(ElementRef);

    private get host(): HTMLElement {
        return this.elementRef.nativeElement;
    }

    constructor() {}

    updateClass(classes: string[]) {
        classes.forEach((className) => {
            this.host.classList.add(className);
        });
    }
}

function useHostService() {
    const elementRef = inject(ElementRef);
    return {
        updateClass(classes: string[]) {
            classes.forEach((className) => {
                elementRef.nativeElement.classList.add(className);
            });
        }
    };
}

@Component({
    selector: 'app-inject-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    providers: [UpdateHostClassService]
})
export class InjectHomeComponent implements OnInit {
    private updateHostClassService = inject(UpdateHostClassService);

    private messageService = inject(MessageService);

    destroy$ = untilDestroyed();

    updateHost = useHostService();

    @HostBinding(`class.thy-button`) isButton = true;

    constructor(messageService: MessageService) {
        debugger;
    }

    ngOnInit(): void {
        this.updateHost.updateClass(['thy-custom-class']);
        // this.updateHostClassService.updateClass(['thy-custom-class']);
        this.messageService.message$.pipe(this.destroy$).subscribe((value) => {
            console.log(`message: ${value}`);
        });
        // this.thyType = 'success';
    }
}
