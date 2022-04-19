import { Component, OnInit } from '@angular/core';
import { ElementControllerService } from '../services/element-controller.service';
import { GloomhavenElement } from '../types/gloomhaven-element.enum';

@Component({
  selector: 'app-top-toolbar',
  templateUrl: './top-toolbar.component.html',
  styleUrls: ['./top-toolbar.component.scss']
})
export class TopToolbarComponent implements OnInit {

  constructor(private _elementController: ElementControllerService) { }

  ngOnInit(): void {
  }

  
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
