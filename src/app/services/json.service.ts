import { Injectable } from '@angular/core';
import { Monster } from '../types/monster';
import MonsterBaseStatsJSON from '../../assets/json/monster_base_stats_normal.json';
import MonsterBaseStatsBossJSON from '../../assets/json/monster_base_stats_bosses.json';
import { MonsterBaseStatsNormal, MonsterBaseStatsBoss } from '../types/monster-base-stats';

@Injectable({
  providedIn: 'root'
})
export class JsonService {
  monsterData: MonsterBaseStatsNormal; 
  bossData: MonsterBaseStatsBoss;
  constructor() { 
    this.monsterData = MonsterBaseStatsJSON;
    console.log(this.monsterData.CityArcher);
    this.bossData = MonsterBaseStatsBossJSON;
    console.log(this.bossData.TheBetrayer);

  }

  getMonsterBaseStats(monster: Monster) {}
}
