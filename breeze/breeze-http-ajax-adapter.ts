// Angular 2 httpx adapter
// based on https://docs.angularjs.org/api/ng/service/http
import { Http, Headers, Request, Response } from 'angular2/http';

/**
 * Ajax http response abstraction expected by Breeze DataServiceAdapter
 */
interface HttpResponse {
  config: {};
  data: any;
  getHeaders: (headerName?: string) => string[];
  ngConfig: {};
  status: number;
  statusText: string;
  response: Response;
};

/**
 * DataServiceAdapter Ajax request configuration\
 */
interface DsaConfig {
  url: string;
  type?: string;
  dataType?: string;
  contentType?: string;
  crossDomain?: string;
  headers?: { };
  data?: any;
  params?: { };
  success: (res: HttpResponse) => HttpResponse;
  error: (res: (HttpResponse | Error)) => HttpResponse;
}

let core = breeze.core;

////////////////////

export class AjaxAngular2Adapter {
  name = 'angular2';
  defaultSettings = {};
  http: Http = null;
  requestInterceptor = (info: { }) => {};

  initialize () {}

  setHttp (http) { this.http = http; }

  ajax (config: DsaConfig) {
    if (!this.http) {
      throw new Error('Unable to locate angular http module for ajax adapter');
    }

    // http request object?
    let ngConfig: { };

    let ngConfigMap = {
      method:      config.type,
      url:         config.url,
      data:        config.data || undefined,
      dataType:    config.dataType,
      contentType: config.contentType,
      crossDomain: config.crossDomain,
      headers:     config.headers || {}
    };

    // TODO: convert dataType, contentType, and crossDomain into headers for http

    if (config.params) {
      // Hack: because of the way that Angular handles writing parameters out to the url.
      // so this approach takes over the url param writing completely.
      let delim = (ngConfigMap.url.indexOf('?') >= 0) ? '&' : '?';
      ngConfigMap.url = ngConfigMap.url + delim + encodeParams(config.params);
    }

    if (!core.isEmpty(this.defaultSettings)) {
      let compositeConfig = core.extend({}, this.defaultSettings);
      ngConfig = core.extend(compositeConfig, ngConfigMap);
      // extend is shallow; extend headers separately
      let headers = core.extend({}, this.defaultSettings['headers']); // copy default headers 1st
      ngConfig['headers'] = core.extend(headers, ngConfigMap.headers);
    }

    /* Background on building the http request
    http.request(req: Request)
    new Request(reqArgs: RequestArgs)
    interface RequestArgs {
        url: string;
        method?: string | RequestMethod;
        search?: string | URLSearchParams;
        headers?: Headers;
        body?: string;
    }
    */
    // http insists on string body
    let body: any = ngConfig['data'];
    if ( body && typeof body !== 'string') {
      body = JSON.stringify(body);
    };

    let reqArgs = {
      url:     <string> ngConfig['url'],
      method:  <string> ngConfig['method'] || 'GET',
      headers: <Headers> ngConfig ['headers'],
      body: body
    };

    let request = new Request(reqArgs);

    let requestInfo = {
      adapter: this,      // this adapter
      config: request,    // angular's http configuration object
      dsaConfig: config,  // the config arg from the calling Breeze DataServiceAdapter
      success: successFn, // adapter's success callback
      error: errorFn      // adapter's error callback
    };

    if (core.isFunction(this.requestInterceptor)) {
      this.requestInterceptor(requestInfo);
      if (this.requestInterceptor['oneTime']) {
        this.requestInterceptor = null;
      }
    }

    if (requestInfo.config) { // exists unless requestInterceptor killed it.
///// TODO FIX THIS!
      return this.http.request(requestInfo.config)
        .toPromise()
        .then(requestInfo.success)
        .catch(requestInfo.error);
    } else {
      return Promise.resolve(null);
    }

    function successFn(res: Response) {
      if (res.status < 200 || res.status >= 300) {
        throw Response;
      }
      // beware:`res.json` will be async some day
      let data = res.json ? res.json() : null;

      let httpResponse: HttpResponse = {
        config: requestInfo.config,
        data: data,
        getHeaders: makeGetHeaders(res),
        ngConfig: requestInfo.config,
        status: res.status,
        statusText: res.statusText,
        response: res
      };
      config.success(httpResponse);
      return Promise.resolve(httpResponse);
    }


    function errorFn(res: (Response | Error)) {
      if (res instanceof Error) {
        return Promise.reject(res); // program error; nothing we can do
      } else {

        // beware:`res.json` will be async some day
        let data = res.json ? res.json() : null;

        // Timeout appears as an error with status===0 and no data.
        if (res.status === 0 && data == null) {
          data = 'timeout';
        }

        let httpResponse: HttpResponse = {
          config: requestInfo.config,
          data: data,
          getHeaders: makeGetHeaders(res),
          ngConfig: requestInfo.config,
          status: res.status,
          statusText: res.statusText,
          response: res
        };
        config.error(httpResponse);
        return Promise.reject(httpResponse);
      }
    }
  };
}

///// Helpers ////

function encodeParams(obj: { }) {
  let query = '';
  let subValue, innerObj, fullSubName;

  for (let name in obj) {
    if (!obj.hasOwnProperty(name)) { continue; }

    let value = obj[name];

    if (value instanceof Array) {
      for (let i = 0; i < value.length; ++i) {
        subValue = value[i];
        fullSubName = name + '[' + i + ']';
        innerObj = {};
        innerObj[fullSubName] = subValue;
        query += encodeParams(innerObj) + '&';
      }
    } else if (value && value.toISOString) { // a feature of Date-like things
      query += encodeURIComponent(name) + '=' + encodeURIComponent(value.toISOString()) + '&';
    } else if (value instanceof Object) {
      for (let subName in value) {
        if (obj.hasOwnProperty(name)) {
          subValue = value[subName];
          fullSubName = name + '[' + subName + ']';
          innerObj = {};
          innerObj[fullSubName] = subValue;
          query += encodeParams(innerObj) + '&';
        }
      }
    } else if (value === null) {
      query += encodeURIComponent(name) + '=&';
    } else if (value !== undefined) {
      query += encodeURIComponent(name) + '=' + encodeURIComponent(value) + '&';
    }
  }

  return query.length ? query.substr(0, query.length - 1) : query;
}

function makeGetHeaders(res: Response) {
  let headers = res.headers;
  return function getHeaders(headerName?: string) { return headers.getAll(headerName); };
}

breeze.config.registerAdapter('ajax', AjaxAngular2Adapter);
