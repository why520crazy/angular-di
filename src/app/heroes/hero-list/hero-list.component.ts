import { Component, ComponentRef, Directive, ElementRef, forwardRef, Input, OnInit, ViewContainerRef } from '@angular/core';
import { Counter } from '../../core/counter.service';
import { RootService } from '../../root.service';
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

    value = "Peter";

    constructor(
        private heroService: HeroService,
        private viewContainerRef: ViewContainerRef,
        private elementRef: ElementRef,
        public counter: Counter,
        public rootService: RootService
    ) {}

    ngOnInit(): void {
        this.heroes = this.heroService.getHeroes();
    }

    clear() {
        this.viewContainerRef.clear();
    }
}
