import { Injectable } from '@angular/core';
import { GloomhavenElement } from '../types/gloomhaven-element.enum';
import { MonsterAbilityCard } from '../types/monster-ability-card';
import { ElementControllerService } from './element-controller.service';
import { ScenarioService } from './scenario.service';

@Injectable({
  providedIn: 'root'
})
export class MonsterAbilityCardService {

  monsterAbilityCards: MonsterAbilityCard[] = [];
  constructor(private _scenarioService: ScenarioService, private _elementsService: ElementControllerService) { }

  drawCard(abilityCard: MonsterAbilityCard) {
    abilityCard.currentCard = abilityCard.cardList[abilityCard.cardList.length - 1];
    abilityCard.statCardInitiative = abilityCard.currentCard.initiative;
    abilityCard.cardLines = [];
    this.parseRules(abilityCard);
    abilityCard.cardList.pop();
    if(abilityCard.currentCard.shuffle) {
      this.shuffleDeck(abilityCard);
    }
    abilityCard.monster.initiative = parseInt(abilityCard.currentCard.initiative);
    this._scenarioService.sortEntities(this._scenarioService.entityList);
  }

  consumeElements() {
        
    if(this._elementsService.getElement(GloomhavenElement.Dark) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Dark);
    } 

    if(this._elementsService.getElement(GloomhavenElement.Light) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Light);
    } 

    if(this._elementsService.getElement(GloomhavenElement.Earth) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Earth);
    } 

    if(this._elementsService.getElement(GloomhavenElement.Fire) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Fire);
    } 

    if(this._elementsService.getElement(GloomhavenElement.Ice) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Ice);
    } 

    if(this._elementsService.getElement(GloomhavenElement.Wind) > 0) {
      this._elementsService.chargeElement(GloomhavenElement.Wind);
    } 
  }

  addMonsterByName(monsterName: string) {
    this._scenarioService.updateEntityList(this._scenarioService.addMonsterByName(monsterName));
  }

  parseRules(abilityCard: MonsterAbilityCard) {
    let subtitles = [];
    for(let i = abilityCard.currentCard.rules.length-1; i >= 0; i--) {
      let rule = abilityCard.currentCard.rules[i].replaceAll('%', '');
      let modifiedStat = '';
      if(rule.split(' ').length > 3) {
        modifiedStat = this.calculateModifiedStats(undefined, undefined, abilityCard, rule.substring(2, rule.length).trim());
      } else {
        modifiedStat = this.calculateModifiedStats(rule.split(' ')[1], rule.split(' ')[2], abilityCard);
      }


      if(rule.startsWith('**')) {
        subtitles.push(modifiedStat);
      } else {
        if(subtitles.length > 0) {
          subtitles.reverse();
          abilityCard.cardLines.push({line: modifiedStat, subtitle: subtitles});
          subtitles = [];
        } else {
          abilityCard.cardLines.push({line: modifiedStat});
        }
      }
    }
    abilityCard.cardLines.reverse();
  }


  calculateModifiedStats(stat: string, modifier: string, abilityCard: MonsterAbilityCard, fullString?: string) {
    let modifiedStat;
    let modifierNum: number;
    let operation = '';
    if(fullString) {
      if(fullString.includes("useelement") || stat && stat.includes('useelement')) {
        console.log(stat + " this one");
        switch(fullString.split(' ')[0]) {
          case 'fire_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Fire);
            return fullString.slice(17, fullString.length);
            break;
          case 'ice_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Ice);
            return fullString.slice(16, fullString.length);
            break;
          case 'dark_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Dark);
            return fullString.slice(17, fullString.length);
            break;
          case 'earth_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Earth);
            return fullString.slice(18, fullString.length);
            break;
          case 'wind_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Wind);
            return fullString.slice(17, fullString.length);
            break;
          case 'light_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Light);
            return fullString.slice(18, fullString.length);
            break;
          case 'any_useelement:':
            abilityCard.useElements.push(GloomhavenElement.Any);
            return fullString.slice(16, fullString.length);
            break;
          default:

            break;
        }
      }
      console.log(fullString);
      return fullString;
    }

    if(stat.includes('any_useelement')) {
      abilityCard.useElements.push(GloomhavenElement.Any);
      return modifier;    
    }

    if(modifier == undefined) {
      return stat.charAt(0).toUpperCase() + stat.substring(1, stat.length);
    }
    console.log(stat + ' ' + modifier);
    switch (stat) {
      case 'range':
        operation = modifier.charAt(0);
        modifierNum = parseInt(modifier.charAt(1));
        if(operation == '-') {
          modifiedStat = 'Range ' + (abilityCard.monster.range - modifierNum);
        } else if(operation == '+') {
          modifiedStat = 'Range ' + (abilityCard.monster.range + modifierNum);
        } else {
          modifiedStat = 'Range ' + modifier.charAt(0);
        }
        break;

      case 'attack':
        operation = modifier.charAt(0);
        modifierNum = parseInt(modifier.charAt(1));
        if(operation == '-') {
          modifiedStat = 'Attack ' + (parseInt(abilityCard.monster.attack.toString()) - modifierNum);
        } else if(operation == '+') {
          modifiedStat = 'Attack ' + (parseInt(abilityCard.monster.attack.toString()) + modifierNum);
        } 
        break;

      case 'move':
        operation = modifier.charAt(0);
        modifierNum = parseInt(modifier.charAt(1));
        if(operation == '-') {
          modifiedStat = 'Move ' + (abilityCard.monster.move - modifierNum);
        } else if(operation == '+') {
          modifiedStat = 'Move ' + (abilityCard.monster.move + modifierNum);
        }
        break;
        default:
          modifiedStat = stat.charAt(0).toUpperCase() + stat.substring(1, stat.length) + ' ' + modifier;
        break;
    }
    return modifiedStat;
  }

  shuffleDeck(abilityCard: MonsterAbilityCard) {
    for(let card of abilityCard.monster.cards) {
      abilityCard.cardList.push(card);
    }
    abilityCard.cardList = this.shuffleArray(abilityCard.cardList);
    abilityCard.currentIndex = 0;
  }

  shuffleArray(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
