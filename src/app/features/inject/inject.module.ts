import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectHomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    InjectHomeComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
        {
            path: '',
            component: InjectHomeComponent
        }
    ])
  ]
})
export class InjectModule { }
