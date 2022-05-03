import { Component, Input, OnInit } from '@angular/core';
import { MonsterAbilityCardService } from 'src/app/services/monster-ability-card.service';
import { Card, CardLine } from 'src/app/types/card-content';
import { Monster } from 'src/app/types/monster';
import { MonsterAbilityCard } from 'src/app/types/monster-ability-card';

@Component({
  selector: 'monster-ability-card',
  templateUrl: './monster-ability-card.component.html',
  styleUrls: ['./monster-ability-card.component.scss']
})
export class MonsterAbilityCardComponent implements OnInit {

  @Input()
  monster: Monster;

  elementOnLine: boolean = true;
  elementIcon = 'ice_useelement';
  abilityCard: MonsterAbilityCard;
  constructor(private _abilityCardService: MonsterAbilityCardService) {
    let abilityCard: MonsterAbilityCard = new MonsterAbilityCard(); 
    abilityCard.cardLines = [];
    abilityCard.cardList = [];
    abilityCard.statCardInitiative = 'Back';
    abilityCard.currentIndex = 0;
    let index = this._abilityCardService.monsterAbilityCards.push(abilityCard);
    this.abilityCard = this._abilityCardService.monsterAbilityCards[index - 1];
  }

  ngOnInit(): void {
    this.abilityCard.monster = this.monster;
    this._abilityCardService.shuffleDeck(this.abilityCard);
  } 

  getCurrentBackground(initiative: string) {
    return "url('../../../assets/MonsterAbilityCard/MonsterAbilityCard" + initiative + ".png')";
  }


}
