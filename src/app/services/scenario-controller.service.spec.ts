import { TestBed } from '@angular/core/testing';

import { ScenarioControllerService } from './scenario-controller.service';

describe('ScenarioControllerService', () => {
  let service: ScenarioControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScenarioControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
