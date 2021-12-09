import { Component, OnInit } from '@angular/core';
import { DarkmodeService } from '@shared/services/darkmode.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'marvel';
  mode: string = '';

  constructor(private darkmodeService: DarkmodeService) { }

  ngOnInit() {
    this.loadMode();
  }

  loadMode() {
    this.darkmodeService.darkEmit.subscribe( data => {
      this.mode = data;
    });
  }

}
