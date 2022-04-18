import { Component } from '@angular/core';
import { ElementControllerService } from './services/element-controller.service';
import { GloomhavenElement } from './types/gloomhaven-element.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private _elementController: ElementControllerService) {}
  title = 'Frosthaven Helper';

  public get gloomhavenElement(): typeof GloomhavenElement {
    return GloomhavenElement; 
  }

  chargeElement(element: GloomhavenElement) {
    if(this._elementController.getElement(element) == 0) {
      this._elementController.chargeElement(element);
    } else {
      this._elementController.consumeElement(element);
    }
  }

  getElementState(element: GloomhavenElement): number {
    return this._elementController.getElement(element);
  }

}

