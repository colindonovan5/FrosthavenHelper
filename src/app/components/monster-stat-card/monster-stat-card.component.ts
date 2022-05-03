import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'monster-stat-card',
  templateUrl: './monster-stat-card.component.html',
  styleUrls: ['./monster-stat-card.component.scss']
})
export class MonsterStatCardComponent implements OnInit {

  constructor() { }
  getCurrentBackground(initiative: string) {
    return "url('../../../assets/MonsterAbilityCard/MonsterAbilityCard" + initiative + ".png')";
  }
  ngOnInit(): void {
  }

}
