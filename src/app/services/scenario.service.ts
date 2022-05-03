import { Injectable } from '@angular/core';
import { Character } from '../types/character';
import { Monster } from '../types/monster';
import { Scenario } from '../types/scenario';
import { CharacterService } from './character.service';
import { MonsterService } from './monster.service';

@Injectable({
  providedIn: 'root'
})
export class ScenarioService {
  scenario: Scenario;
  scenarioDifficulty: number;
  scenarioRound: number;
  characters: Character[];

  entityList: (Monster | Character)[] = [];
  constructor(private _monsterService: MonsterService, private _characterService: CharacterService) {
    this.scenarioDifficulty = 0;
    this.scenarioRound = 0;
    this.characters = _characterService.characters;
    this.scenario = new Scenario();

    let character: Character = new Character();
    character.initiative = 42;
    this.characters.push(character);

    this.entityList = [];
    if(this.characters.length > 0) {
      for(let character of this.characters) {
        this.entityList.push(character);
      }
    }
    if(this.scenario.scenarioMonsters.length > 0) {
      for(let monster of this.scenario.scenarioMonsters) {
        this.entityList.push(monster);
      }
    }
    
  }

  updateEntityList(entity: (Monster|Character)) {
    this.entityList.push(entity);
  }

  sortEntities(entityList: (Monster | Character)[]) {
    this.entityList.sort((a, b) => { 
      return a.initiative - b.initiative
    });
  }

  getGoldValue(): number {
    if(this.scenarioDifficulty == 0 || this.scenarioDifficulty == 1) {
      return 2;
    } else if(this.scenarioDifficulty == 2 || this.scenarioDifficulty == 3) {
      return 3;
    } else if(this.scenarioDifficulty == 4 || this.scenarioDifficulty == 5) {
      return 4;
    } else if(this.scenarioDifficulty == 6) {
      return 5;
    } else if(this.scenarioDifficulty == 7) {
      return 6;
    }
  }

  getXPValue(): number {
    return 4 + (this.scenarioDifficulty * 2);
  }

  getTrapDamage(): number {
    return this.scenarioDifficulty + 2;
  }

  addMonster(monster: Monster) {
    let monsterToAdd = this._monsterService.getMonster(monster.name, monster.elite, this.scenarioDifficulty);
    this.scenario.scenarioMonsters.push(monsterToAdd);
    return monsterToAdd;
  }

  addMonsterByName(monsterName: string, elite?: boolean) {
    if(elite == undefined) {
      elite = false;
    }
    let monsterToAdd = this._monsterService.getMonster(monsterName, elite, this.scenarioDifficulty);
    this.scenario.scenarioMonsters.push(monsterToAdd);
    return monsterToAdd;
  }
}
