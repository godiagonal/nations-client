/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NationOverviewComponent } from './nation-overview.component';

describe('Component: NationOverview', () => {
  it('should create an instance', () => {
    let component = new NationOverviewComponent(null, null);
    expect(component).toBeTruthy();
  });
});
