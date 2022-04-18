import { TestBed } from '@angular/core/testing';

import { ElementControllerService } from './element-controller.service';
import { GloomhavenElement } from '../types/gloomhaven-element.enum';

describe('ElementControllerService', () => {
  let service: ElementControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElementControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not allow invalid GloomhavenElement value', () => {
    expect(() => {
      service.getElement(7)
    }).toThrowError();
  }) 
});
