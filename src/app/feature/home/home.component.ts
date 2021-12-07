import { Component, Input, OnInit } from '@angular/core';
import { DarkmodeService } from '@shared/services/darkmode.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  currentTheme!: any;

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit() {
    console.log('a');

    this.load();
  }

  load() {
    this.darkmodeService.darkEmit.subscribe( data => {
      console.log('holaaa');
      this.currentTheme = data;
    });
  }

}
