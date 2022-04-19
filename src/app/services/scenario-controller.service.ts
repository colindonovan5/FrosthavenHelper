import { Injectable } from '@angular/core';
import { Character } from '../types/character';
import { Monster } from '../types/monster';
import { Scenario } from '../types/scenario';

@Injectable({
  providedIn: 'root'
})
export class ScenarioControllerService {
  scenario: Scenario;
  scenarioDifficulty: number;
  scenarioRound: number;
  characters: Character[];

  constructor() {
    this.scenarioDifficulty = 1;
    this.scenarioRound = 0;
    
    this.characters = [];
    this.scenario = new Scenario();
    this.characters.push(new Character());
    this.scenario.scenarioMonsters.push(new Monster());
    this.scenario.scenarioMonsters.push(new Monster());
    this.scenario.scenarioMonsters.push(new Monster());
    
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

  addCharacter(character: Character) {
    this.characters.push(character);
  }
}
