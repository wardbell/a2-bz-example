import { Injectable } from 'angular2/core';
import { Http }       from 'angular2/http';

import { _RegistrationHelper } from './entities';
import { Q } from '../breeze/q';
import { METADATA } from './entities';

// Configure Breeze for Angular ... exactly once.
breeze.config.setQ(<breeze.promises.IPromiseService>Q);

let webApiUrl = 'http://learn.breezejs.com/api/northwind/';

@Injectable()
export class EntityManagerService {

  entityManager: breeze.EntityManager;

  constructor() {
    let dataservice = new breeze.DataService({
      serviceName: webApiUrl,
      hasServerMetadata: false
    });

    let metadataStore = new breeze.MetadataStore();
    metadataStore.importMetadata(METADATA);

    this.entityManager = new breeze.EntityManager({
      dataService: dataservice,
      metadataStore: metadataStore
    });

    _RegistrationHelper.register(metadataStore);
  }
}
