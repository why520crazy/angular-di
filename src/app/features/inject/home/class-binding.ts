import { ElementRef, inject, Type } from '@angular/core';

type SafeAny = any;

const HOST_ELEMENT_NAME = '__HOST_ELEMENT';

function makeInjectElementRef(target: SafeAny) {
    if (target[HOST_ELEMENT_NAME]) {
        return;
    }

    const originalFactory = target.constructor.ɵfac;
    target.constructor.ɵfac = function (t?: Type<unknown>) {
        target[HOST_ELEMENT_NAME] = inject(ElementRef).nativeElement;
        const instance = originalFactory(t);
        return instance;
    };
}

export function ClassBinding(format: string): PropertyDecorator {
    return function (target: Object, propertyKey: string | symbol, originalDescriptor?: TypedPropertyDescriptor<any>) {
        makeInjectElementRef(target);
        const privatePropName = `$$__${propertyKey.toString()}`;
        let lastClassName = '';
        return {
            get(): string {
                return originalDescriptor && originalDescriptor.get ? originalDescriptor.get.bind(this)() : this[privatePropName];
            },
            set(value: SafeAny): void {
                const newClassName = format.replace(`{{value}}`, value);
                if (originalDescriptor && originalDescriptor.set) {
                    originalDescriptor.set.bind(this)(newClassName);
                }
                (target as SafeAny)[privatePropName] = newClassName;
                if (lastClassName !== newClassName) {
                    if (lastClassName) {
                        (target as SafeAny)[HOST_ELEMENT_NAME].classList.remove(lastClassName);
                    }
                    (target as SafeAny)[HOST_ELEMENT_NAME].classList.add(newClassName);
                }
            }
        };
    };
}
