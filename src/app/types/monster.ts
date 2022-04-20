import { MonsterCards, MonsterClass } from "./card-content";
import { Condition } from "./condition";
import { Entity } from "./entity";
import { BossStats, MonsterBaseStatsBoss, MonsterBaseStatsNormal, MonsterStats } from "./monster-base-stats";

export class Monster {

    name: string;
    health: number;
    icon: string;
    baseStats: MonsterBaseStatsNormal | MonsterBaseStatsBoss;
    monsterClass: MonsterClass;
    cards: MonsterCards;
    isBoss: boolean;

    constructor(name: string, icon: string, baseStats: MonsterBaseStatsNormal | MonsterBaseStatsBoss, monsterClass: MonsterClass, cards: MonsterCards, isBoss: boolean, scenarioDifficulty: number, playerCount: number, elite: boolean, currentHealth?: number) {
        this.name = name;
        this.icon = icon;
        if (isBoss) {
            let stats = baseStats as MonsterBaseStatsBoss;
            let challengeAdjustedStats = this.getChallengeLevelBoss(scenarioDifficulty, stats);
            this.health = this.parseHealth(challengeAdjustedStats.health, playerCount)
        } else {
            let stats = baseStats as MonsterBaseStatsNormal;
            let challengeAdjustedStats = this.getChallengeLevelMonster(scenarioDifficulty, stats);
            if (elite) {
                this.health = challengeAdjustedStats.elite.health;
            } else {
                this.health = challengeAdjustedStats.normal.health;
            }
        }
    }

    parseHealth(health: string, playerCount: number) {
        if(health.includes('xC')) {
            let healthBase = parseInt(health.charAt(0));
            return healthBase * playerCount;
        }
    }

    getChallengeLevelMonster(scenarioDifficulty: number, stats: MonsterBaseStatsNormal): MonsterStats {
        switch (scenarioDifficulty) {
            case 0:
                return stats.lvl0;
                break;
            case 1:
                return stats.lvl1;
                break;
            case 2:
                return stats.lvl2;
                break;
            case 3:
                return stats.lvl3;
                break;
            case 4:
                return stats.lvl4;
                break;
            case 5:
                return stats.lvl5;
                break;
            case 6:
                return stats.lvl6;
                break;
            case 7:
                return stats.lvl7;
                break;
            default:
                break;
        }
    }

    getChallengeLevelBoss(scenarioDifficulty: number, stats: MonsterBaseStatsBoss): BossStats {
        switch (scenarioDifficulty) {
            case 0:
                return stats.lvl0;
                break;
            case 1:
                return stats.lvl1;
                break;
            case 2:
                return stats.lvl2;
                break;
            case 3:
                return stats.lvl3;
                break;
            case 4:
                return stats.lvl4;
                break;
            case 5:
                return stats.lvl5;
                break;
            case 6:
                return stats.lvl6;
                break;
            case 7:
                return stats.lvl7;
                break;
            default:
                break;
        }
    }
}
