import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '@home/shared/model/character.model';
import { CharacterService } from '@home/shared/services/character/character.service';
import { ModalComponent } from '@shared/components/modal/modal.component';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  characters!: Character[];
  record!: Character;
  search!: string;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiCharacter: CharacterService,
  ) { }

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes);
  //   this.helper.send.subscribe(data => this.search = data);
  //   if(!this.search) {
  //     this.doSearch();
  //   }
  // }

  ngOnInit(): void {
    this.get();
    this.waitForEvent();
  }

  get() {
    this.apiCharacter.get().subscribe(response => {
      this.characters = <any>response?.data?.results;
      console.log(response.data.results);
    });
  }

  getOne(id:number) {
    this.apiCharacter.getOne(id).subscribe(response => {
      const [character] = response?.data?.results;
      this.record = character;
      this.modal.open(this.record, false, false);
    });
  }

  doSearch() {
    this.apiCharacter.getSearch(this.search).subscribe(response => {
      this.characters = <any>response?.data?.results;
    });
  }

  sortData(sort: Event) {
    this.apiCharacter.getSortBy((<HTMLInputElement>sort.target).value).subscribe(response => {
      this.characters = <any>response?.data?.results;
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

}
