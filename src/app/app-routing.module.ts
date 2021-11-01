import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('@home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'favorites',
    loadChildren: () => import('@favorite/favorite.module').then(mod => mod.FavoriteModule)
  },
  {
    path: 'comics/:id',
    loadChildren: () => import('@comic/comic.module').then(mod => mod.ComicModule)
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
