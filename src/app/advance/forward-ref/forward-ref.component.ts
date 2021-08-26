import { Component, forwardRef, Injectable, OnInit } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

abstract class ForwardRefToken {
    name!: string;
}

let index = 1;
@Component({
    selector: 'app-forward-ref',
    templateUrl: './forward-ref.component.html',
    styleUrls: ['./forward-ref.component.scss'],
    providers: [
        {
            provide: forwardRef(() => NameService)
        },
        {
            provide: ForwardRefToken,
            useExisting: ForwardRefComponent
        },
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: ForwardRefComponent,
            multi: true
        }
    ]
})
export class ForwardRefComponent implements OnInit, ControlValueAccessor {
    name = `ForwardRefComponent - ${index++}`;

    value!: string;

    constructor(public nameService: NameService) {}

    writeValue(obj: any): void {
        this.value = obj;
    }

    registerOnChange(fn: any): void {}

    registerOnTouched(fn: any): void {}

    ngOnInit(): void {}
}

@Injectable()
class NameService {
    name = 'why520crazy';
}

@Component({
    selector: 'app-forward-ref-child',
    template: `From Parent: {{ parent.name }}`
})
export class ForwardRefChildComponent implements OnInit {
    constructor(public parent: ForwardRefToken) {}

    ngOnInit(): void {}
}


@MyDecorator(A)
class A {}

class B {}

function MyDecorator(type: Function) {
    return function (target: any) {};
}
