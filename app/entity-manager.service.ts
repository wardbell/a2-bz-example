import { Injectable } from 'angular2/core';
import { _RegistrationHelper } from './entities/index';
import { Q } from '../breeze/q';
import { METADATA } from './entities/northwind.bz.metadata';

// Configure Breeze for Angular ... exactly once.
breeze.config.setQ(<breeze.promises.IPromiseService>Q);

@Injectable()
export class EntityManagerService {

  entityManager: breeze.EntityManager;
  constructor() {
    let dataservice = new breeze.DataService({
      serviceName: '/api/somewhere',
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
