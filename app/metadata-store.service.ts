import { Injectable } from 'angular2/core';
import { Http }       from 'angular2/http';

import { _RegistrationHelper } from './entities';
import { Q } from '../breeze/q';
import { METADATA } from './entities';


// Configure Breeze for Angular ... exactly once.
breeze.config.setQ(<breeze.promises.IPromiseService>Q);

let origRegister = breeze.MetadataStore.prototype.registerEntityTypeCtor;

@Injectable()
export class MetadataStoreService {

  private _metadataStore: breeze.MetadataStore;

  get metadataStore() {
    if (this._metadataStore) { return this._metadataStore; }
    this._metadataStore = new breeze.MetadataStore();
    this._metadataStore.importMetadata(METADATA);
    this._registerCtor(this._metadataStore);
    return this._metadataStore;
  }

  protected _registerCtor(metadataStore: breeze.MetadataStore) {
    _RegistrationHelper.register(this.metadataStore);
  }
}

@Injectable()
export class TestMetadataStoreService extends MetadataStoreService {

  protected _registerCtor(metadataStore: breeze.MetadataStore) {
    metadataStore.registerEntityTypeCtor =  (
      entityTypeName: string,
      entityCtor: Function,
      initializationFn?: (entity: breeze.Entity) => void,
      noTrackingFn?: (entity: breeze.Entity) => breeze.Entity): void => {

      entityCtor.prototype.entityType = undefined;
      entityCtor.prototype.complexType = undefined;

      origRegister.bind(metadataStore)(entityTypeName, entityCtor, initializationFn, noTrackingFn);

    };
    super._registerCtor(this.metadataStore);
  }
}
