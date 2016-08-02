/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { LocationService } from './location.service';

describe('Service: Nation', () => {
  beforeEach(() => {
    addProviders([LocationService]);
  });

  it('should ...',
    inject([LocationService],
      (service: LocationService) => {
        expect(service).toBeTruthy();
      }));
});
