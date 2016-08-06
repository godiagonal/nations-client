/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { GoogleService } from './google.service';

describe('Service: GooglePlaces', () => {
  beforeEach(() => {
    addProviders([GoogleService]);
  });

  it('should ...',
    inject([GoogleService],
      (service: GoogleService) => {
        expect(service).toBeTruthy();
      }));
});
