export interface MonsterBaseStatsNormal {
  name: string,
  lvl0: MonsterStats,
  lvl1: MonsterStats,
  lvl2: MonsterStats,
  lvl3: MonsterStats,
  lvl4: MonsterStats,
  lvl5: MonsterStats,
  lvl6: MonsterStats,
  lvl7: MonsterStats
}
            
  

export interface MonsterBaseStatsBoss {
  name: string,
  lvl0: BossStats,
  lvl1: BossStats,
  lvl2: BossStats,
  lvl3: BossStats,
  lvl4: BossStats,
  lvl5: BossStats,
  lvl6: BossStats,
  lvl7: BossStats;
}

export interface MonsterStats {
  normal: {
    health: number,
    move: number,
    attack: number,
    range: number,
    attributes: string[]
  },
  elite: {
    health: number,
    move: number,
    attack: number,
    range: number,
    attributes: string[]
  }
}

export interface BossStats {
  health: string,
  move: number,
  attack: (string | number),
  range: number,
  special1: string[],
  special2: string[],
  immunities: string[],
  notes: string
}