import { CardLine, Card } from "./card-content";
import { GloomhavenElement } from "./gloomhaven-element.enum";
import { Monster } from "./monster";

export class MonsterAbilityCard {
    monster: Monster;
  
    statCardInitiative: string;
    cardLines: CardLine[] = [];
    cardList: Card[] = [];
  
    currentCard: Card;
    currentIndex: number;

    chargeElements: GloomhavenElement[] = [];
    useElements: GloomhavenElement[] = []; 
}