import { Injectable, Input } from '@angular/core';
import { Monster } from '../types/monster';
import { CharacterService } from './character.service';
import { JsonService } from './json.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor(private _json: JsonService, private _characterService: CharacterService) {}

  getMonster(monsterName: string, elite: boolean, scenarioDifficulty: number, currentHealth?: number) {
    let baseStats = this._json.getMonsterBaseStatsByName(monsterName);
    let monsterClass = this._json.getMonsterClassByName(monsterName).class;
    let monsterNameFormatted = monsterName.toLowerCase().replaceAll(' ', '');
    let iconPath = 'assets/Monsters/gloomhaven/gh-' + monsterNameFormatted + '.png';
    let isBoss = monsterClass == 'Boss';
    let cardContents = this._json.getMonsterCardContentsByName(monsterClass); 
    if(isBoss) {
      cardContents = this._json.getMonsterCardContentsByName('Boss'); 
    }
    
    return new Monster(monsterName, iconPath, baseStats, monsterClass, cardContents, isBoss, scenarioDifficulty, this._characterService.getCharacterCount(), elite, currentHealth);
  }
}
