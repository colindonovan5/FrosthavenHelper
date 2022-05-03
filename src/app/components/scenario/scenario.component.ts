import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { ScenarioService } from '../../services/scenario.service';
import { Character } from '../../types/character';
import { Entity } from '../../types/entity';
import { Monster } from '../../types/monster';

declare var Tesseract;
@Component({
  selector: 'scenario',
  templateUrl: './scenario.component.html',
  styleUrls: ['./scenario.component.scss']
})
export class ScenarioComponent implements OnInit {

  entityList: (Monster | Character)[];

  constructor(public _scenarioController: ScenarioService, private _jsonService: JsonService) { 
    
  }

  ngOnInit(): void {

  }

  ngOnChanges() {
    this._scenarioController.sortEntities(this._scenarioController.entityList);
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
