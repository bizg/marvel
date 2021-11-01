import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  record!: any;
  isComic!: boolean;
  @Output() data = new EventEmitter<any>();
  modal: boolean = false;
  image!: string;
  canAdd!: boolean;
  id!: number;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  open(data: any, isComic: boolean, canAdd: boolean) {
    this.modal = true;
    this.isComic = isComic;
    this.record = data;
    this.canAdd = canAdd;
    this.id = data.id;
    this.image = `${this.record?.thumbnail?.path}/portrait_incredible.${this.record?.thumbnail?.extension}`;
    console.log(this.record);
  }

  close() {
    this.modal = false;
  }

  add() {
    this.data!.emit(this.record);
  }

  noAdd() {
    if(this.isComic && !this.canAdd) {
      this.alertService.infoAlert('The comic can\'t be add to favorites');
    } else if(!this.isComic) {
      this.alertService.infoAlert('The characters can\'t be add to favorites');
    }
  }

  noAvailable() {
    this.alertService.infoAlert('This funtionality it\'s not available now');
  }

}
