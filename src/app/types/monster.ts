import { MonsterCards, MonsterClass } from "./card-content";
import { Condition } from "./condition";
import { Entity } from "./entity";
import { BossStats, MonsterBaseStatsBoss, MonsterBaseStatsNormal, MonsterStats } from "./monster-base-stats";

export class Monster {

    name: string;
    health: number;
    icon: string;
    monsterClass: MonsterClass;
    cards: MonsterCards;
    isBoss: boolean;
    elite: boolean;
    immunities?: string[];
    currentHealth: number;
    attack: number | string;
    range: number;
    move: number;
    attributes?: string[];

    constructor(name: string, icon: string, baseStats: MonsterBaseStatsNormal | MonsterBaseStatsBoss, monsterClass: MonsterClass, cards: MonsterCards, isBoss: boolean, scenarioDifficulty: number, playerCount: number, elite: boolean, currentHealth?: number) {
        this.name = name;
        this.icon = icon;
        this.cards = cards;

        this.setStats(isBoss, baseStats, scenarioDifficulty, playerCount, elite);
        
        this.monsterClass = monsterClass;
        this.isBoss = isBoss;
        this.elite = elite;
        currentHealth ? this.currentHealth = currentHealth : this.currentHealth = this.health;
        
    }

    setStats(isBoss, baseStats, scenarioDifficulty, playerCount, elite) {
        if (isBoss) {
            let stats = baseStats as MonsterBaseStatsBoss;
            let challengeAdjustedStats = this.getChallengeLevelBoss(scenarioDifficulty, stats);
            this.health = this.parseHealth(challengeAdjustedStats.health, playerCount)
            this.immunities = challengeAdjustedStats.immunities;
            this.cards.cards[0].rules = challengeAdjustedStats.special2;
            this.cards.cards[1].rules = challengeAdjustedStats.special2;
            this.cards.cards[2].rules = challengeAdjustedStats.special2;
            this.cards.cards[3].rules = challengeAdjustedStats.special1;
            this.cards.cards[4].rules = challengeAdjustedStats.special1;
            this.cards.cards[5].rules = challengeAdjustedStats.special1;
            this.attack = this.parseAttack(challengeAdjustedStats.attack, playerCount, challengeAdjustedStats);
            this.range = challengeAdjustedStats.range;
            this.move = challengeAdjustedStats.move;
            
        } else {
            let stats = baseStats as MonsterBaseStatsNormal;
            let challengeAdjustedStats = this.getChallengeLevelMonster(scenarioDifficulty, stats);
            if (elite) {
                this.health = challengeAdjustedStats.elite.health;
                this.attack = challengeAdjustedStats.normal.attack;
                this.range = challengeAdjustedStats.elite.range;
                this.move = challengeAdjustedStats.elite.move;
                this.attributes = challengeAdjustedStats.elite.attributes;
            } else {
                this.health = challengeAdjustedStats.normal.health;
                this.attack = challengeAdjustedStats.normal.attack;
                this.range = challengeAdjustedStats.normal.range;
                this.move = challengeAdjustedStats.normal.move;
                this.attributes = challengeAdjustedStats.normal.attributes;

            }
        }
    }

    parseAttack(attack: string | number, playerCount: number, bossStats: BossStats) {
        attack = attack.toString();            
        if(attack.includes('V')) {
            return 'V';
        } else if(attack.includes('+X')) {
            return attack.substring(0, attack.indexOf('+')) + ' + X';
        } else if(attack.includes('+C')) {
            console.log('wenis');

            return parseInt(attack.substring(0, attack.indexOf('+'))) + playerCount;
        } else if(attack.includes('C')) {
            return playerCount;
        } else if(attack.includes('X')){
            return bossStats.notes;
        } else {
            return parseInt(attack);
        }

    }

    parseHealth(health: string, playerCount: number) {
        if(health.includes('xC')) {
            let healthBase = parseInt(health.substring(0, health.indexOf('x')));
            return (healthBase * playerCount);
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
