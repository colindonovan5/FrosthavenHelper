import { Injectable, Input } from '@angular/core';
import { Monster } from '../types/monster';
import { CharacterService } from './character.service';
import { JsonService } from './json.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterService {
  constructor(private _json: JsonService, private _characterService: CharacterService) {

  }

  getMonster(monsterName: string, elite: boolean, scenarioDifficulty: number, currentHealth?: number) {
    let baseStats = this._json.getMonsterBaseStatsByName(monsterName);
    let cardContents = this._json.getMonsterCardContentsByName(monsterName); // Fix error where it breaks if isBoss is wrong
    let monsterClass = this._json.getMonsterClassByName(monsterName);
    let monsterNameFormatted = monsterName.toLowerCase().replace(' ', '');
    let iconPath = 'assets/Monsters/gloomhaven/gh-' + monsterNameFormatted + '.png';
    let isBoss = monsterClass.class == 'Boss';
    return new Monster(monsterName, iconPath, baseStats, monsterClass, cardContents, isBoss, scenarioDifficulty, this._characterService.getCharacterCount(), elite, currentHealth);
  }
}
