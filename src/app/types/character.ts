import { Condition } from "./condition";
import { Entity } from "./entity";

export class Character implements Entity {
    initiative: number;
    maxHealth: number;
    health: number;
    xp: number;
    coins: number;
    conditions: Condition[];
    exhausted: boolean;
    level: number
    icon: string;
    portrait: string;
}
