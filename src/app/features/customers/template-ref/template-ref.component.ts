import { Component, ElementRef, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
    selector: 'app-template-ref',
    templateUrl: './template-ref.component.html',
    styleUrls: ['./template-ref.component.scss']
})
export class TemplateRefComponent implements OnInit {
    @ViewChild('tpl', { static: true }) template!: TemplateRef<{ name: string }>;

    @ViewChild('p', { static: true }) elementRef!: ElementRef<HTMLElement>;

    constructor() {}

    ngOnInit(): void {
        // const viewRef = this.template.createEmbeddedView({ name: 'hello' });
        // const element = this.template.elementRef.nativeElement as HTMLElement;
        // this.elementRef.nativeElement.append(...viewRef.rootNodes);
    }
}
