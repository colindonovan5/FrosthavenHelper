export interface MonsterCards {
    name: string;
    cards?: Card[]
}

export interface Card {
    initiative: string;
    shuffle: boolean;
    rules: string[];
}

export interface MonsterClass {
    class?: string;    
    name: string;
}

export class CardLine {
    line?: string;
    subtitle?: string[];
}