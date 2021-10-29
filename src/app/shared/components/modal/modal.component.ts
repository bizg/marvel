import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() record!: any;
  @Input() isComic!: boolean;
  @Output() data? = new EventEmitter();
  modal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.modal = true;
  }

  close() {
    this.modal = false;
    if(this.isComic) {
      this.data?.emit(this.record);
    }
  }

}
