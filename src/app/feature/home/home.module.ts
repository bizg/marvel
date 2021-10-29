import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { CardComponent } from './components/card/card.component';
import { SharedModule } from '@shared/shared.module';
import { ModalComponent } from '@shared/components/modal/modal.component';


@NgModule({
  declarations: [
    HomeComponent,
    FavoriteComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule
  ],
  providers: [
    ModalComponent
  ]
})
export class HomeModule { }
