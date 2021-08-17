import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MultistageHomeComponent } from './features/multistage/home/home.component';
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
    // {
    //     path: 'user',
    //     component: MultistageHomeComponent
    // },
    {
        path: 'multistage',
        loadChildren: () => import('./features/multistage/multistage.module').then((m) => m.MultistageModule)
    },
    {
        path: 'hierarchy',
        loadChildren: () => import('./features/hierarchy/hierarchy.module').then((m) => m.HierarchyModule)
    },
    // {
    //     path: 'multistage',
    //     component: MultistageHomeComponent
    // },
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
