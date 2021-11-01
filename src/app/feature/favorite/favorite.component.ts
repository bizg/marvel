import { Component, OnInit, ViewChild } from '@angular/core';
import { FavoriteService } from '@home/shared/services/favorite/favorite.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { AlertService } from '@shared/services/alert.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  favorites: any;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiFavorite: FavoriteService,
    private alertService: AlertService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.favorites = JSON.parse(localStorage.getItem('favorites')!);
  }

  getOne(id:number) {
    const [record] = this.favorites.filter((e: {id: number}) => e.id == id);
    this.modal.open(record, true, false);
  }


  add(data: any) {
    if(this.apiFavorite.add(data)) {
      this.alertService.successAlert('The comic was added successfuly');
      this.get();
      this.modal.close();
    } else {
      this.alertService.infoAlert('The comic can\'t added beacause it\'s already in the list')
    }
  }

  delete(id:number) {
    this.apiFavorite.delete(id);
    this.get();
  }

}
