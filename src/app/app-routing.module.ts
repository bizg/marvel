import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'favorite',
    loadChildren: () => import('@favorite/favorite.module').then(mod => mod.FavoriteModule)
  },
  {
    path: 'purchase',
    loadChildren: () => import('@purchase/purchase.module').then(mod => mod.PurchaseModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
