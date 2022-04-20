import { Condition } from "src/app/types/condition";
import { Monster } from "src/app/types/monster";

export class BanditArcher extends Monster {


    constructor(name: string, icon: string, abilities: string[]) {
        super(name, icon, abilities);
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
