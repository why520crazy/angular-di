import { Component, ComponentRef, Directive, ElementRef, forwardRef, Input, OnInit, ReflectiveInjector, ViewContainerRef } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
    selector: 'app-hero-list',
    templateUrl: './hero-list.component.html',
    styleUrls: ['./hero-list.component.scss'],
    providers: [
         {
            provide: 'a',
            useExisting: HeroListComponent
        }
    ]
})
export class HeroListComponent implements OnInit {
    heroes!: Hero[];

    constructor(private heroService: HeroService, private viewContainerRef: ViewContainerRef, private elementRef: ElementRef) {}

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes();
    }

    clear() {
        this.viewContainerRef.clear();
    }
}
