import { Injectable } from '@angular/core';
import SomeJsonObjectName from '../../assets/json/monster_base_stats_normal.json';
import { Monster } from '../types/monster';
import { JsonService } from './json.service';
import { ScenarioControllerService } from './scenario-controller.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterControllerService {

  constructor(private _json: JsonService) {

  }

  getMonster(monsterName: string, isBoss: boolean, elite: boolean, characterCount: number, scenarioDifficulty: number, currentHealth?: number) {
    let baseStats = this._json.getMonsterBaseStatsByName(monsterName);
    let cardContents = this._json.getMonsterCardContentsByName(monsterName); // Fix error where it breaks if isBoss is wrong
    let monsterClass = this._json.getMonsterClassByName(monsterName);
    let monsterNameFormatted = monsterName.toLowerCase().replace(' ', '');
    let iconPath = '../assets/Monsters/gloomhaven/gh-' + monsterNameFormatted + '.png';
    return new Monster(monsterName, iconPath, baseStats, monsterClass, cardContents, isBoss, scenarioDifficulty, characterCount, elite, currentHealth);
  }
}
