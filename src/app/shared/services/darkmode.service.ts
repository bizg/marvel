import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  currentTheme = localStorage.getItem('theme') || "light";
  input = localStorage.getItem('input') || false;
  @Output() darkEmit = new EventEmitter();

  constructor() { }

  changeTheme(value: any) {
    this.currentTheme = this.currentTheme === "light" ? "dark" : "light";
    localStorage.setItem('theme', this.currentTheme);
    localStorage.setItem('input', value);
    this.darkEmit.emit('g');
    console.log('hola');
    return this.getTheme();
  }

  changeTheme2() {
    console.log('h');
    this.darkEmit.emit('perra vida');
  }

  getTheme() {
    return this.currentTheme;
  }

  getInput() {
    return this.input;
  }
}
