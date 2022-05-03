import { Component, OnInit } from '@angular/core';
import { JsonService } from 'src/app/services/json.service';
import { MonsterAbilityCardService } from 'src/app/services/monster-ability-card.service';
import { ElementControllerService } from '../../services/element-controller.service';
import { GloomhavenElement } from '../../types/gloomhaven-element.enum';

@Component({
  selector: 'top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {

  constructor(
    private _elementController: ElementControllerService, 
    private _jsonService: JsonService,
    private _monsterAbilityCardService: MonsterAbilityCardService) { }

  ngOnInit(): void {
    this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('The Gloom');
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
     this.addMonsterByName('Frost Demon');   
  }

  
  public get gloomhavenElement(): typeof GloomhavenElement {
    return GloomhavenElement; 
  }

  chargeElement(element: GloomhavenElement) {
    if(this._elementController.getElement(element) == 0) {
      this._elementController.chargeElement(element);
    } else {
      this._elementController.consumeElement(element);
    }
  }

  getElementState(element: GloomhavenElement): number {
    return this._elementController.getElement(element);
  }

  getMonsterNames() {
    return this._jsonService.monsterNameList;
  }

  addMonsterByName(monsterName: string) {
    this._monsterAbilityCardService.addMonsterByName(monsterName);
  }

}
