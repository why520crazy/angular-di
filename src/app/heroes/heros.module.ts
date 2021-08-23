import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ForwardRefComponent, ForwardRefChildComponent } from './forward-ref/forward-ref.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroComponent } from './hero/hero.component';

@NgModule({
    declarations: [HeroListComponent, HeroComponent, ForwardRefComponent, ForwardRefChildComponent],
    imports: [SharedModule, CommonModule, FormsModule],
    providers: []
})
export class HeroesModule {}
