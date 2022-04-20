import { Condition } from "./condition";
import { Entity } from "./entity";

export class Monster implements Entity {
    constructor(name: string, icon: string, abilities: string[]) {
        this.name = name;
        this.icon = icon;
        this.abilities = this.abilities;
    }
    
    name: string;
    initiative: number;
    conditions: Condition[];
    exhausted: boolean;
    icon: string;
    portrait: string;
    maxHealth: number;
    health: number;
    movement: number;
    damage: number;
    range: number;
    abilities: string[]; // links to ability card images
    elite: boolean;
    standeeNumber: number;
    numberOfStandees: number;
    roomNumber: number;
}
