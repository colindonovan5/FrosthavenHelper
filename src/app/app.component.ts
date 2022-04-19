import { Component } from '@angular/core';
import { ElementControllerService } from './services/element-controller.service';
import { GloomhavenElement } from './types/gloomhaven-element.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {}
  title = 'Frosthaven Helper';


}

