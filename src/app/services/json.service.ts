import { Injectable } from '@angular/core';
import { Monster } from '../types/monster';

import MonsterBaseStatsJSON from '../../assets/json/monster_base_stats_normal.json';
import MonsterBaseStatsBossJSON from '../../assets/json/monster_base_stats_bosses.json';
import MonsterCardContentJSON from '../../assets/json/card_content.json';
import MonsterClassContentJSON from '../../assets/json/card_classes.json';
import ScenarioListJSON from '../../assets/json/scenarios.json';

import { MonsterBaseStatsNormal, MonsterBaseStatsBoss } from '../types/monster-base-stats';
import { MonsterClass, MonsterCards } from '../types/card-content';
import { ScenarioDetails } from '../types/scenario-details';


@Injectable({
  providedIn: 'root'
})
export class JsonService {
  monsterData: MonsterBaseStatsNormal[]; 
  bossData: MonsterBaseStatsBoss[];
  monsterCardData: MonsterCards[];
  monsterClassData: MonsterClass[];
  scenarioData: ScenarioDetails[];

  constructor() { 
    this.monsterData = MonsterBaseStatsJSON;
    this.bossData = MonsterBaseStatsBossJSON;
    this.monsterCardData = MonsterCardContentJSON;
    this.monsterClassData = MonsterClassContentJSON;
    this.scenarioData = ScenarioListJSON;

    console.log(this.getMonsterBaseStatsByName("City Guard"))
    console.log(this.getMonsterClassByName('Jekserah'))
    console.log(this.getMonsterCardContentsByName('Ooze'))
    console.log(this.getScenarioByNumber(65).decks);
  }

  getMonsterBaseStats(monster: Monster) {
    let monsterStats: MonsterBaseStatsNormal | MonsterBaseStatsBoss;
    monsterStats = this.monsterData.find(m => m.name == monster.name);
    if(monsterStats == undefined) {
      monsterStats = this.bossData.find(m => m.name == monster.name);
    }
    if(monsterStats == undefined) {
      throw 'Monster ' + monster.name + ' not found';
    }
    return monsterStats;
  }

  getMonsterBaseStatsByName(monsterName: string) {
    let monsterStats: MonsterBaseStatsNormal | MonsterBaseStatsBoss;
    monsterStats = this.monsterData.find(m => m.name == monsterName);
    if(monsterStats == undefined) {
      monsterStats = this.bossData.find(m => m.name == monsterName);
    }

    if(monsterStats == undefined) {
      throw 'Monster ' + monsterName + ' not found';
    }

    return monsterStats;
  }

  getMonsterCardContents(monster: Monster) {
    let monsterCardContents: MonsterCards;

    monsterCardContents = this.monsterCardData.find(m => m.name == monster.name)
    
    return monsterCardContents;
  }

  getMonsterCardContentsByName(monsterName: string): MonsterCards {
    let monsterCardContents: MonsterCards;

    monsterCardContents = this.monsterCardData.find(m => m.name == monsterName)
    
    return monsterCardContents;
  }

  getMonsterClass(monster: Monster) {
    let monsterClass: MonsterClass;
    
    monsterClass = this.monsterClassData.find(m => m.name == monster.name);
    
    return monsterClass;
  }

  getMonsterClassByName(monsterName: string) {
    let monsterClass: MonsterClass;
    
    monsterClass = this.monsterClassData.find(m => m.name == monsterName);
    
    return monsterClass;
  }

  getScenarioByNumber(scenarioNumber: number) {
    if(scenarioNumber > 95 || scenarioNumber < 0) {
      throw "Only scenarios 1-95 are supported right now";
    } else {
      return this.scenarioData[scenarioNumber-1];
    }
  }
}
