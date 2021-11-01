import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';
import { PaginationComponent } from './components/pagination/pagination.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  declarations: [
    ModalComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [ModalComponent, PaginationComponent],
  providers: [
    ModalComponent,
    AlertService
  ],
  bootstrap: [
    PaginationComponent
  ]
})
export class SharedModule { }
