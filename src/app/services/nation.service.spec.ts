/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { NationService } from './nation.service';

describe('Service: Nation', () => {
  beforeEach(() => {
    addProviders([NationService]);
  });

  it('should ...',
    inject([NationService],
      (service: NationService) => {
        expect(service).toBeTruthy();
      }));
});
