import { Component, Input, OnInit } from '@angular/core';
import { Monster } from '../../types/monster';

@Component({
  selector: 'app-monster-card',
  templateUrl: './monster-card.component.html',
  styleUrls: ['./monster-card.component.scss']
})
export class MonsterCardComponent implements OnInit {

  @Input()
  monster: Monster;

  constructor() { 
  }

  ngOnInit(): void {
  }
}
