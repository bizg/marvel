import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Output() pageChange = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  pageChanged(event: any) {
    this.pageChange.emit(event);
  }

}
