import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComicRoutingModule } from './comic-routing.module';
import { ComicComponent } from './comic.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    ComicComponent,
  ],
  imports: [
    CommonModule,
    ComicRoutingModule,
    SharedModule
  ]
})
export class ComicModule { }
