import { Component, OnInit } from '@angular/core';
import { MonsterService } from 'src/app/services/monster.service';

@Component({
  selector: 'bottom-toolbar',
  templateUrl: './bottom-toolbar.component.html',
  styleUrls: ['./bottom-toolbar.component.scss']
})
export class BottomToolbarComponent implements OnInit {

  constructor(private _monsterService: MonsterService) { }

  ngOnInit(): void {
  }

  drawCard() {
    
  }
}
