/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NationDetailsPageComponent } from './nation-details-page.component';

describe('Component: NationDetailsPage', () => {
  it('should create an instance', () => {
    let component = new NationDetailsPageComponent(null, null, null);
    expect(component).toBeTruthy();
  });
});
