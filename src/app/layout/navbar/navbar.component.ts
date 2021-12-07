import { Component, OnInit, ViewChild } from '@angular/core';
import { CardComponent } from '@home/components/card/card.component';
import { DarkmodeService } from '@shared/services/darkmode.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  @ViewChild(CardComponent) card!: CardComponent;
  search!: string;
  checked: any = localStorage.getItem('input');

  constructor(
    private darkmode: DarkmodeService
  ) { }

  ngOnInit(): void {
    console.log('b');
    this.checked = this.darkmode.getInput();
    console.log(this.checked);
  }

  changeTheme(event: any) {
    console.log(event.target.checked);
    this.darkmode.changeTheme(event.target.checked);
  }

  changeTheme2() {
    console.log('hola2');
    this.darkmode.changeTheme2();
  }

}
