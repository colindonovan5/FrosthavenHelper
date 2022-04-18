import { Condition } from "./condition";

export interface Entity {
    initiative: number;
    maxHealth: number;
    health: number;
    conditions: Condition[];
    exhausted: boolean;
    icon: string;
    portrait: string;
}
