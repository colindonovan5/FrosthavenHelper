import { Component, OnInit } from '@angular/core';
import { ElementControllerService } from 'src/app/services/element-controller.service';
import { MonsterAbilityCardService } from 'src/app/services/monster-ability-card.service';
import { MonsterService } from 'src/app/services/monster.service';
import { ScenarioService } from 'src/app/services/scenario.service';
import { GloomhavenElement } from 'src/app/types/gloomhaven-element.enum';

@Component({
  selector: 'bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

  constructor(
    private _monsterService: MonsterService, 
    private _monsterAbilityCardService: MonsterAbilityCardService,
    private _elementsService: ElementControllerService
    ) { 

  }

  ngOnInit(): void {
  }

  drawCard() {
    for(let abilityCard of this._monsterAbilityCardService.monsterAbilityCards) {
      this._monsterAbilityCardService.drawCard(abilityCard);
    }
  }
}
