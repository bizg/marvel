import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() title!: string;
  @Input() description!: string;
  @Input() image!: string;
  @Input() isComic!: boolean;
  @Input() id!: number;
  @Output() data = new EventEmitter();
  modal: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  open() {
    this.modal = true;
  }

  close() {
    this.modal = false;
  }

}
