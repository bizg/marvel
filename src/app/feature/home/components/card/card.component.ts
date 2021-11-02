import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '@home/shared/model/character.model';
import { CharacterService } from '@home/shared/services/character/character.service';
import { ComicService } from '@home/shared/services/comic/comic.service';
import { FavoriteService } from '@home/shared/services/favorite/favorite.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { PaginationComponent } from '@shared/components/pagination/pagination.component';
import { AlertService } from '@shared/services/alert.service';
import { fromEvent } from 'rxjs';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  characters!: Character[];
  record!: Character;
  search!: string;
  p: number = 1;
  total: number | undefined;
  sort: string = '';
  @ViewChild(PaginationComponent) paginate!: PaginationComponent;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiCharacter: CharacterService,
    private apiComic: ComicService,
    private apiFavorite: FavoriteService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.get();
    this.waitForEvent();
  }

  get() {
    this.apiCharacter.get(0,this.sort).subscribe(response => {
      this.characters = <any>response?.data?.results;
      this.total = response?.data?.total;
      this.p = 1;
    });
  }

  getOne(id:number) {
    this.apiCharacter.getOne(id).subscribe(response => {
      const [character] = response?.data?.results;
      this.record = character;
      this.modal.open(this.record, false, false);
    });
  }

  getOneComic(uri: string) {
    this.apiComic.getOne(uri).subscribe(response => {
      console.log(response);
      const [comic] = response?.data?.results;
      this.record = comic;
      this.modal.open(this.record, true, true);
    });
  }

  add(data: any) {
    if(!data) {
      this.alertService.infoAlert('The comic can\'t added beacause it\'s already in the list')
    } else {
      this.alertService.successAlert('The comic was added successfuly');
      this.modal.close();
    }
  }

  doSearch() {
    this.apiCharacter.getSearch(this.search).subscribe(response => {
      this.characters = <any>response?.data?.results;
      this.total = response?.data?.total;
    });
  }

  sortData(sort: Event) {
    this.sort = (<HTMLInputElement>sort.target).value;
    this.apiCharacter.getSortBy(this.sort, this.search).subscribe(response => {
      this.characters = <any>response?.data?.results;
      this.p = 1;
    });
  }

  waitForEvent() {
    let click = fromEvent(document.querySelector('.aSearch')!, 'click');
    click.subscribe(() => {
      this.search = (document.querySelector('.inputSearch') as HTMLInputElement).value;
        if(this.search != '') {
          this.doSearch();
        } else {
          this.get();
        }
    });
  }

  pageChanged(e: any) {
    let offset = (e * environment.limitCharacters) - environment.limitCharacters;
    this.p = e;
    this.apiCharacter.get(offset,this.sort).subscribe(response => {
      this.characters = <any>response?.data?.results;
    });
  }

}
