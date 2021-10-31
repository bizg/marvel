import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/modal/modal.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AlertService } from './services/alert.service';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports: [ModalComponent],
  providers: [
    ModalComponent,
    AlertService
  ]
})
export class SharedModule { }
