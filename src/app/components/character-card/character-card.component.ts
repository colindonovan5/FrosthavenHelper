import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss']
})
export class CharacterCardComponent implements OnInit {

  constructor() { }
  
  imageURL = 'assets/Monsters/gloomhaven/gh-ooze.png';

  ngOnInit(): void {}

}
