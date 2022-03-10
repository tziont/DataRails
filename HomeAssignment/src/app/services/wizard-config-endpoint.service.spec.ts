import { TestBed } from '@angular/core/testing';

import { WizardConfigEndpointService } from './wizard-config-endpoint.service';

describe('WizardConfigEndpointService', () => {
  let service: WizardConfigEndpointService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WizardConfigEndpointService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
