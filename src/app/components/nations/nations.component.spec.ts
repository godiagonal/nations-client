/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NationsComponent } from './nations.component';

describe('Component: Nations', () => {
  it('should create an instance', () => {
    let component = new NationsComponent(null);
    expect(component).toBeTruthy();
  });
});
