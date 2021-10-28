import { Component, OnInit } from '@angular/core';
import { Character } from '@home/shared/model/character.model';
import { CharacterService } from '@home/shared/services/character/character.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  characters!: Character[];

  constructor(
    private apiCharacter: CharacterService
  ) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.apiCharacter.get().subscribe(response => {
      this.characters = <any>response?.data?.results;
      console.log(response.data.results);
    });
  }

}
