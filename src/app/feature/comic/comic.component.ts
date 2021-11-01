import { Component, OnInit, ViewChild } from '@angular/core';
import { ComicService } from './shared/services/comic.service';
import { ComicService as ApiHomeComic } from '@home/shared/services/comic/comic.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { FavoriteService } from '@home/shared/services/favorite/favorite.service';
import { AlertService } from '@shared/services/alert.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss']
})
export class ComicComponent implements OnInit {

  id!: any;
  comics: any;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiComic: ComicService,
    private apiHomeComic: ApiHomeComic,
    private apiFavorite: FavoriteService,
    private alertService: AlertService,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.paramMap.get('id');
    this.get();
  }

  get() {
    this.apiComic.get(this.id).subscribe(response => {
      this.comics = response.data.results;
      console.log(this.comics);
    })
  }

  getOne(uri: string) {
    this.apiHomeComic.getOne(uri).subscribe(response => {
      console.log(response);
      const [comic] = response?.data?.results;
      this.modal.open(comic, true, true);
    });
  }

  add(data: any) {
    console.log(data.id);
    if(this.apiFavorite.add(data)) {
      this.alertService.successAlert('The comic was added successfuly');
      this.modal.close();
    } else {
      this.alertService.infoAlert('The comic can\'t added beacause it\'s already in the list')
    }
  }

}
