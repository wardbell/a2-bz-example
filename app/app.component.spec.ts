/* tslint:disable:no-unused-variable */
import { AppComponent } from './app.component';
import { EntityManagerService } from './entity-manager.service';
import { MetadataStoreService,
         TestMetadataStoreService} from './metadata-store.service';

import {
  beforeEach, beforeEachProviders, withProviders,
  describe, ddescribe, xdescribe,
  expect, it, iit, xit,
  inject, injectAsync,
  ComponentFixture, TestComponentBuilder
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

  let comp:    AppComponent;
  let fixture: ComponentFixture;

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb.overrideProviders(AppComponent, [
      EntityManagerService,
      provide(MetadataStoreService, {useClass: TestMetadataStoreService})
    ])
    .createAsync(AppComponent).then(fix => {
      fixture = fix;
      comp = fixture.componentInstance;
    });
  }));

  it('should instantiate component', () => {
    expect(comp instanceof AppComponent).toBe(true, 'should create AppComponent');
  });

  it('should have expected <h1> text', () => {
    fixture.detectChanges();
    let h1 = fixture.debugElement.query(el => el.name === 'h1').nativeElement;
    expect(h1.innerText).toMatch(/customer name is acme/i, '<h1> should display "Acme" customer name');
  });
});
