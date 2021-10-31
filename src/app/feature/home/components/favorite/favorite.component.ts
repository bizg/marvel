import { Component, OnInit, ViewChild } from '@angular/core';
import { ComicService } from '@home/shared/services/comic/comic.service';
import { FavoriteService } from '@home/shared/services/favorite/favorite.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  comics: any;
  favorites: any;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiComics: ComicService,
    private apiFavorite: FavoriteService,
  ) { }

  ngOnInit(): void {
    this.get();
  }

  getRandom() {
    this.apiComics.getRandom(this.apiFavorite.getStringDate()).subscribe(response => {
      this.apiFavorite.setRandom(response);
      this.get();
    });
  }

  get() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
  }

  getOne(id:number) {
      const [record] = this.favorites.filter((e: {id: number}) => e.id == id);
      console.log(record);
      this.modal.open(record, true, false);
  }

  delete(id:number) {
    this.apiFavorite.delete(id);
    this.get();
  }

}
