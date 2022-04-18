import { Condition } from "./condition";

export class Summon {
    maxHP: number;
    currentHP: number;
    movement: number;
    damage: number;
    range: number;
    standeeNumber: number;
    conditions: Condition[];

    isDead() {
        if(this.currentHP <= 0) {
            return true;
        }
    }
}
