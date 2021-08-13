import { Component, ElementRef, Inject, OnInit, ViewContainerRef, forwardRef, InjectionToken, Injectable } from '@angular/core';

const TOKEN = new InjectionToken('a');

class A {
    a!: string;
    constructor() {
        this.a = 'a';
    }
}
const a = {};
@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    providers: [
        {
            provide: a,
            useClass: A
        }
        // {
        //     provide: TOKEN,
        //     useClass: forwardRef(() => NameService)
        // }
    ]
})
export class HeroComponent implements OnInit {
    constructor(private viewContainerRef: ViewContainerRef, private elementRef: ElementRef, @Inject(a) private nameService: NameService) {
    }

    ngOnInit(): void {
        // console.log(this.nameService.getName());
    }
}

@Injectable()
class NameService {
    getName() {
        return 'Angular';
    }
}

// new A();
