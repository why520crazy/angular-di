import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user/user.module').then((m) => m.UserModule)
    },
    {
        path: 'heroes',
        component: HeroListComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
