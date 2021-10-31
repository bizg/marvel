import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '@home/components/card/card.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(CardComponent) card!: CardComponent;
  search!: string;

  constructor(
  ) { }

  ngOnInit(): void {
  }

}
