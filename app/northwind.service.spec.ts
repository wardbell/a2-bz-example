/* tslint:disable:no-unused-variable */
import { provide } from 'angular2/core';
import { AppComponent } from './app.component';
import { Angular2Bridge } from '../breeze/angular2-bridge';
import { HTTP_PROVIDERS } from 'angular2/http';
import { EntityManagerService } from './entity-manager.service';
import { MetadataStoreService,
         TestMetadataStoreService} from './metadata-store.service';
import { NorthwindService } from './northwind.service';

import {
  beforeEach, beforeEachProviders, withProviders,
  describe, ddescribe, xdescribe,
  expect, it, iit, xit,
  inject, injectAsync
} from 'angular2/testing';

interface Done {
    (): void;
    fail: (err: any) => void;
}

/////////// Specs ///////////////////////
describe('NorthwindService', () => {

  let northwindService: NorthwindService;

  beforeEachProviders(() => {
    return [
      Angular2Bridge,
      EntityManagerService,
      HTTP_PROVIDERS,
      NorthwindService,
      provide(MetadataStoreService, {useClass: TestMetadataStoreService})
    ];
  });

  beforeEach(inject([NorthwindService, Angular2Bridge], (service) => {
    northwindService = service;
  }));


  /// Delete this
  it('should run a passing test', () => {
    expect(true).toEqual(true, 'should pass');
  });

  it('can get customers from server', (done) => {
    northwindService.getAllCustomers()
    .then(() => {})
    .then(done, done.fail);
  });

});
