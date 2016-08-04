/* tslint:disable:no-unused-variable */

import { By }           from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { addProviders, async, inject } from '@angular/core/testing';
import { TestParentComponent } from './test-parent.component';

describe('Component: TestParent', () => {
  it('should create an instance', () => {
    let component = new TestParentComponent(null, null);
    expect(component).toBeTruthy();
  });
});
