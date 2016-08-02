/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { NationListComponent } from './nation-list.component';

describe('Component: NationList', () => {
  it('should create an instance', () => {
    let component = new NationListComponent(null);
    expect(component).toBeTruthy();
  });
});
