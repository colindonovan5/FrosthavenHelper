import { Component, OnInit } from '@angular/core';
import { ScenarioControllerService } from '../services/scenario-controller.service';
import { Character } from '../types/character';
import { Entity } from '../types/entity';
import { Monster } from '../types/monster';

declare var Tesseract;
@Component({
  selector: 'app-scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  constructor(private _scenarioController: ScenarioControllerService) { }
  entityList: (Monster | Character)[];

  ngOnInit(): void {
    this.entityList = [];
    if(this.getCharacters().length > 0) {
      for(let character of this.getCharacters()) {
        this.entityList.push(character);
      }
    }

    if(this.getMonsters().length > 0) {
      for(let monster of this.getMonsters()) {
        this.entityList.push(monster);
      }
    }
  }

  getCharacters(): Character[] {
    return this._scenarioController.characters;
  }

  getMonsters(): Monster[] {
    return this._scenarioController.scenario.scenarioMonsters;
  }

  isMonster(entity: Entity) {
    return entity instanceof Monster;
  }

  isCharacter(entity: Entity) {
    return entity instanceof Character;
  }
}
