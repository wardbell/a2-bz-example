import { Injectable } from 'angular2/core';
import { Http } from 'angular2/http';
import { Q } from './q';
import { AjaxAngular2Adapter } from './breeze-http-ajax-adapter';

@Injectable()
export class Angular2Bridge {
  constructor(public http: Http) {
    // Configure Breeze for Angular ... exactly once.
    // config breeze to use the native 'backingStore' modeling adapter appropriate for Ng
    // 'backingStore' is the Breeze default when it detects that KnockoutJS is absent
    // but we set it here to be explicit.
    breeze.config.initializeAdapterInstance('modelLibrary', 'backingStore', true);
    breeze.config.setQ(<breeze.promises.IPromiseService> Q);
    breeze.config.registerAdapter('ajax', () => new AjaxAngular2Adapter(http));
    breeze.config.initializeAdapterInstance('ajax', AjaxAngular2Adapter.adapterName, true);
  }
}
