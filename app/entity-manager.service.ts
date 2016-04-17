import { Injectable } from 'angular2/core';

import { MetadataStoreService } from './metadata-store.service';

let webApiUrl = 'http://sampleservice.breezejs.com/api/northwind';

@Injectable()
export class EntityManagerService {

  entityManager: breeze.EntityManager;

  constructor(metadataStoreService: MetadataStoreService) {
    let dataservice = new breeze.DataService({
      serviceName: webApiUrl,
      hasServerMetadata: false
    });

    this.entityManager = new breeze.EntityManager({
      dataService: dataservice,
      metadataStore: metadataStoreService.metadataStore
    });
  }
}
