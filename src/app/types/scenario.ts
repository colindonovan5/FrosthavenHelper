import { Monster } from "./monster";

export class Scenario {
    constructor() {
        this.scenarioMonsters = [];
        this.scenarioName = '';
        this.roomCount = 1;
        this.scenarioNumber = 1;
    }
    
    scenarioNumber: number;
    scenarioMonsters: Monster[];
    scenarioName: string;
    roomCount: number;

}
