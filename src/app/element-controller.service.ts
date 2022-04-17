import { Injectable } from '@angular/core';
import { GloomhavenElement } from './gloomhaven-element.enum';

@Injectable({
  providedIn: 'root'
})
export class ElementControllerService {

  constructor() { }

  private iceCharge = 0;
  private fireCharge = 0;
  private windCharge = 0;
  private earthCharge = 0;
  private darkCharge = 0;
  private lightCharge = 0;

  public getElement(element: GloomhavenElement): number {
    switch (element) {
      case GloomhavenElement.Dark:
        return this.darkCharge;
        break;
      case GloomhavenElement.Light:
        return this.lightCharge;
        break;
      case GloomhavenElement.Earth:
        return this.earthCharge;
        break;
      case GloomhavenElement.Wind:
        return this.windCharge;
        break;  
      case GloomhavenElement.Ice:
        return this.iceCharge;
        break;
      case GloomhavenElement.Fire:
        return this.fireCharge;
        break;  
      default:
        throw new Error("Invalid element supplied");
        break;
    }
  }

  public consumeElement(element: GloomhavenElement) {
    switch (element) {
      case GloomhavenElement.Dark:
        this.darkCharge = 0;
        break;
      case GloomhavenElement.Light:
        this.lightCharge = 0;
        break;
      case GloomhavenElement.Earth:
        this.earthCharge = 0;
        break;
      case GloomhavenElement.Wind:
        this.windCharge = 0;
        break;  
      case GloomhavenElement.Ice:
        this.iceCharge = 0;
        break;
      case GloomhavenElement.Fire:
        this.fireCharge = 0;
        break;  
      default:
        throw new Error("Invalid element supplied");
        break;
    }
  }

  public chargeElement(element: GloomhavenElement) {
    switch (element) {
      case GloomhavenElement.Dark:
        if(this.darkCharge == 0) {
          this.darkCharge = 2;
        } else {
          this.darkCharge--;
        }
        break;
      case GloomhavenElement.Light:
        if(this.lightCharge == 0) {
          this.lightCharge = 2;
        } else {
          this.lightCharge--;
        }
        break;
      case GloomhavenElement.Earth:
        if(this.earthCharge == 0) {
          this.earthCharge = 2;
        } else {
          this.earthCharge--;
        }
        break;
      case GloomhavenElement.Wind:
        if(this.windCharge == 0) {
          this.windCharge = 2;
        } else {
          this.windCharge--;
        }
        break;  
      case GloomhavenElement.Ice:
        if(this.iceCharge == 0) {
          this.iceCharge = 2;
        } else {
          this.iceCharge--;
        }
        break;
      case GloomhavenElement.Fire:
        if(this.fireCharge == 0) {
          this.fireCharge = 2;
        } else {
          this.fireCharge--;
        }
        break;  
      default:
        throw new Error("Invalid element supplied");
        break;
    }
    
  }

}
