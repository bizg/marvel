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
  @Output() data? = new EventEmitter();
  modal: boolean = false;
  image!: string;

  constructor(
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
  }

  open(data: any, isComic: boolean) {
    this.modal = true;
    this.isComic = isComic;
    this.record = data;
    this.image = `${this.record?.thumbnail?.path}/portrait_incredible.${this.record?.thumbnail?.extension}`;
    console.log(this.record);
  }

  close() {
    this.modal = false;
    if(this.isComic) {
      this.data?.emit(this.record);
    }
  }

  noAdd() {
    this.alertService.infoAlert('The characters can\'t be add to favorites');
  }

  noAvailable() {
    this.alertService.infoAlert('This funtionality it\'s not available now');
  }

}
