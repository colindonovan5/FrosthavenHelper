import { Injectable } from '@angular/core';
import { Character } from '../types/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  characters: Character[] = [];

  constructor() { 
    this.addCharacter(new Character());    
  }

  addCharacter(character: Character) {
    this.characters.push(character);
  }

  getCharacterCount() {
    return this.characters.length;
  }
}
