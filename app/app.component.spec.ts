/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { EntityManagerService } from './entity-manager.service';

import {
  beforeEach, beforeEachProviders, withProviders,
  describe, ddescribe, xdescribe,
  expect, it, iit, xit,
  inject, injectAsync, fakeAsync, TestComponentBuilder, tick
} from 'angular2/testing';

import { provide }        from 'angular2/core';
import { ViewMetadata }   from 'angular2/core';
import { PromiseWrapper } from 'angular2/src/facade/promise';

/////////// Module Preparation ///////////////////////
interface Done {
    (): void;
    fail: (err: any) => void;
}

////////  SPECS  /////////////

/// Delete this: verify can use Angular testing's DOM abstraction to access DOM
describe('AppComponent smoke test', () => {
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });
});

describe('AppComponent', function() {
  beforeEachProviders(() => [
    EntityManagerService
  ]);

  it('should instantiate component',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

        return tcb.createAsync(AppComponent).then(fixture => {
          expect(fixture.componentInstance instanceof AppComponent).toBe(true, 'should create AppComponent');
        });
      }));

  it('should have expected <h1> text',
      injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {

        return tcb.createAsync(AppComponent).then(fixture => {
          // fixture.detectChanges();  // need for a binding; we don't have one
          let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
          expect(h1.innerText).toMatch(/customer name is acme/i, '<h1> should display "Acme" customer name');
        });
      }));
});
