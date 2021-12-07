import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '@shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    HomeComponent,
    FavoriteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    NgxPaginationModule
  ],
  exports: [
    CardComponent
  ],
  providers: [
    FavoriteComponent,
  ]
})
export class HomeModule { }
