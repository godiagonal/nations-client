/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TestChildComponent } from './test-child.component';

describe('Component: Test', () => {
  it('should create an instance', () => {
    let component = new TestChildComponent(null, null);
    expect(component).toBeTruthy();
  });
});
