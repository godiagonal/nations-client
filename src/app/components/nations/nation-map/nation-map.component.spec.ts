/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NationMapComponent } from './nation-map.component';

describe('Component: NationMap', () => {
  it('should create an instance', () => {
    let component = new NationMapComponent(null, null, null);
    expect(component).toBeTruthy();
  });
});
