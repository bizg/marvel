import { Injectable } from '@angular/core';
import { Character } from '@home/shared/model/character.model';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor() { }

  delete(id: number): void {
    let data = JSON.parse(localStorage.getItem('favorites')!);
    console.log(data);
    data = data.filter((e: { id: number; }) => e.id != id);
    localStorage.removeItem('favorites');
    localStorage.setItem('favorites',JSON.stringify(data));
  }

  add(data: Character): boolean {
    let favorites = JSON.parse(localStorage.getItem('favorites')!);
    let canAdd = favorites.filter((e: {id: number}) => e.id == data.id);
    if(!canAdd) {
      favorites = [...favorites, data];
      localStorage.removeItem('favorites');
      localStorage.setItem('favorites',JSON.stringify(favorites));
      return true;
    } else {
      return false;
    }
  }

  randomDate(date1:string, date2:string): string{
    let newDate1 = (new Date(date1).getTime()).toString();
    let newDate2 = (new Date(date2).getTime()).toString();
    let date = new Date(this.getRandomDate(parseInt(newDate2), parseInt(newDate1)));

    return this.formatDate(date);
  }

  getRandomDate(min:number, max:number): number {
    return Math.random() * (max - min) + min;
  }

  formatDate(date:any): string {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
  }

  getStringDate(): string {
    let date1 = this.randomDate('03-08-2010', '03-10-2021');
    let date2 = this.randomDate('03-08-2000', '02-10-2010');
    return `${date2},${date1}`;
  }


}
