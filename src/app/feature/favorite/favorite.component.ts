import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '@home/shared/services/favorite/favorite.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favorites: any;

  constructor(
    private apiFavorite: FavoriteService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
  }

  delete(id:number) {
    this.apiFavorite.delete(id);
    this.get();
  }

}
