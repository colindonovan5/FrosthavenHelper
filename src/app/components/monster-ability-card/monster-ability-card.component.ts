import { Component, Input, OnInit } from '@angular/core';
import { Card, CardLine } from 'src/app/types/card-content';
import { Monster } from 'src/app/types/monster';

@Component({
  selector: 'monster-ability-card',
  templateUrl: './monster-ability-card.component.html',
  styleUrls: ['./monster-ability-card.component.scss']
})
export class MonsterAbilityCardComponent implements OnInit {

  @Input()
  monster: Monster;

  statCardInitiative: string;
  cardLines: CardLine[] = [];
  cardList: Card[];

  currentCard: Card;
  currentIndex: number;

  constructor() { 
    this.statCardInitiative = 'Back';
    this.currentIndex = 0;
  }

  ngOnInit(): void {
    this.cardList = this.monster.cards;
    this.shuffleDeck();
    this.drawCard();
  } 

  getCurrentBackground(initiative: string) {
    return "url('../../../assets/MonsterAbilityCard/MonsterAbilityCard" + initiative + ".png')"
  }

  drawCard() {
    this.currentCard = this.cardList[this.cardList.length - 1];
    this.statCardInitiative = this.currentCard.initiative;
    this.cardLines = [];
    this.parseRules();
    this.cardList.pop();
  }

  parseRules() {
    let line = '';
    let subtitles = [];
    for(let i = this.currentCard.rules.length-1; i >= 0; i--) {
      let rule = this.currentCard.rules[i].replaceAll('%', '');
      let modifiedStat = '';
      if(rule.split(' ').length > 3) {
        modifiedStat = this.calculateModifiedStats(undefined, undefined, rule.substring(2, rule.length));
      } else {
        modifiedStat = this.calculateModifiedStats(rule.split(' ')[1], rule.split(' ')[2]);
      }


      if(rule.startsWith('**')) {
        subtitles.push(modifiedStat);
      } else {
        if(subtitles.length > 0) {
          subtitles.reverse();
          this.cardLines.push({line: modifiedStat, subtitle: subtitles});
          subtitles = [];
        } else {
          this.cardLines.push({line: modifiedStat});
        }
      }
    }
    this.cardLines.reverse();
  }


  calculateModifiedStats(stat: string, modifier: string, fullString?: string) {
    let modifiedStat;
    let operation = '';
    if(fullString) {
      return fullString;
    }

    if(modifier == undefined) {
      return stat.charAt(0).toUpperCase() + stat.substring(1, stat.length);
    }
    switch (stat) {
      case 'range':
        operation = modifier.charAt(0);
        if(operation == '-') {
          modifiedStat = 'Range ' + (this.monster.range - parseInt(modifier.charAt(1)));
        } else if(operation == '+') {
          modifiedStat = 'Range ' + (this.monster.range + parseInt(modifier.charAt(1)));
        } else {
          modifiedStat = 'Range ' + modifier.charAt(0);
        }
        break;

      case 'attack':
        operation = modifier.charAt(0);
        if(operation == '-') {
          modifiedStat = 'Attack ' + (parseInt(this.monster.attack.toString()) - parseInt(modifier.charAt(1)));
        } else if(operation == '+') {
          modifiedStat = 'Attack ' + (parseInt(this.monster.attack.toString()) + parseInt(modifier.charAt(1)));
        } 
        break;

      case 'move':
        operation = modifier.charAt(0);
        if(operation == '-') {
          modifiedStat = 'Move ' + (this.monster.move - parseInt(modifier.charAt(1)));
        } else if(operation == '+') {
          modifiedStat = 'Move ' + (this.monster.move + parseInt(modifier.charAt(1)));
        }
        break;
      default:
        modifiedStat = stat.charAt(0).toUpperCase() + stat.substring(1, stat.length) + ' ' + modifier;
        break;
    }
    return modifiedStat;
  }

  shuffleDeck() {
    this.cardList = this.shuffleArray(this.monster.cards);
    console.log(this.cardList);
    this.currentIndex = 0;
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


/*

    for(let i = startIndex; i < this.currentCard.rules.length; i++) {
      let rules = this.currentCard.rules;
      let rule = this.currentCard.rules[i].replaceAll('%', '').replaceAll("+", '').replaceAll('-', '');
      if(rule.includes('range') || rule.includes('attack') || rule.includes('move') || rule.includes('shield') || rule.includes('retaliate') || rule.includes('heal')) {
        let splitRule = rule.split(' ');
        if(splitRule[0] == '*') {
          let subtitles = [];
          if(i != rules.length - 1 && rules[i + 1].includes('**') && rules[i+1].includes('self') || rules[i + 1].includes('range')) {
            let splitNext = rules[i + 1].split(' ');
            subtitles.push(splitNext[1] + ' ' + splitNext[2]);
            this.cardLines.push({line: splitRule[1] + ' ' + splitRule[2], subtitle: subtitles})
            rules[i+1] += 'USED';
          } else {
            this.cardLines.push({line: splitRule[1] + ' ' + splitRule[2]})
          }
        } else {
          this.cardLines.push({subtitle: [splitRule[1] + ' ' + splitRule[2]]})
        }
      }
    }
*/