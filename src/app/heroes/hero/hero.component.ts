import { Component, ElementRef, Inject, OnInit, ViewContainerRef, forwardRef, InjectionToken, Injectable } from '@angular/core';
@Component({
    selector: 'app-hero',
    templateUrl: './hero.component.html',
    styleUrls: ['./hero.component.scss'],
    providers: []
})
export class HeroComponent implements OnInit {
    constructor(private viewContainerRef: ViewContainerRef, private elementRef: ElementRef) {}

    ngOnInit(): void {}
}
