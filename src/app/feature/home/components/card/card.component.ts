import { Component, OnInit, ViewChild } from '@angular/core';
import { Character } from '@home/shared/model/character.model';
import { CharacterService } from '@home/shared/services/character/character.service';
import { ModalComponent } from '@shared/components/modal/modal.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  characters!: Character[];
  record!: Character;
  @ViewChild(ModalComponent) modal!: ModalComponent;

  constructor(
    private apiCharacter: CharacterService,
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

  getOne(id:number) {
    this.apiCharacter.getOne(id).subscribe(response => {
      const [character] = response?.data?.results;
      this.record = character;
      this.modal.open(this.record, false);
    });
  }

}
