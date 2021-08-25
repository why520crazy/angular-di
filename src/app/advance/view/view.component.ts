import { Component, OnInit, TemplateRef, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injectable } from '@angular/core';

@Component({
    selector: 'app-advance-view',
    templateUrl: './view.component.html',
    styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
    @ViewChild('tpl', { static: true }) tpl!: TemplateRef<unknown>;

    @ViewChild('container', { static: true }) container!: ViewContainerRef;

    constructor(private cdr: ComponentFactoryResolver, viewService: ViewService) {
        debugger;
    }

    ngOnInit(): void {}
}

@Injectable({ providedIn: 'root' })
class ViewService {
    constructor(private cdr: ComponentFactoryResolver) {
        (window as any)['cdr'] = cdr;
    }
}
