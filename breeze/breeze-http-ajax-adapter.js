// Angular 2 httpx adapter
// based on https://docs.angularjs.org/api/ng/service/http
System.register(['angular2/http'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var http_1;
    var core, AjaxAngular2Adapter;
    ///// Helpers ////
    function encodeParams(obj) {
        var query = '';
        var subValue, innerObj, fullSubName;
        for (var name_1 in obj) {
            if (!obj.hasOwnProperty(name_1)) {
                continue;
            }
            var value = obj[name_1];
            if (value instanceof Array) {
                for (var i = 0; i < value.length; ++i) {
                    subValue = value[i];
                    fullSubName = name_1 + '[' + i + ']';
                    innerObj = {};
                    innerObj[fullSubName] = subValue;
                    query += encodeParams(innerObj) + '&';
                }
            }
            else if (value && value.toISOString) {
                query += encodeURIComponent(name_1) + '=' + encodeURIComponent(value.toISOString()) + '&';
            }
            else if (value instanceof Object) {
                for (var subName in value) {
                    if (obj.hasOwnProperty(name_1)) {
                        subValue = value[subName];
                        fullSubName = name_1 + '[' + subName + ']';
                        innerObj = {};
                        innerObj[fullSubName] = subValue;
                        query += encodeParams(innerObj) + '&';
                    }
                }
            }
            else if (value === null) {
                query += encodeURIComponent(name_1) + '=&';
            }
            else if (value !== undefined) {
                query += encodeURIComponent(name_1) + '=' + encodeURIComponent(value) + '&';
            }
        }
        return query.length ? query.substr(0, query.length - 1) : query;
    }
    exports_1("encodeParams", encodeParams);
    function makeGetHeaders(res) {
        var headers = res.headers;
        return function getHeaders(headerName) { return headers.getAll(headerName); };
    }
    exports_1("makeGetHeaders", makeGetHeaders);
    return {
        setters:[
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            ;
            core = breeze.core;
            ////////////////////
            AjaxAngular2Adapter = (function () {
                function AjaxAngular2Adapter(http) {
                    this.http = http;
                    this.name = AjaxAngular2Adapter.adapterName;
                    this.defaultSettings = {};
                }
                AjaxAngular2Adapter.prototype.initialize = function () { };
                AjaxAngular2Adapter.prototype.ajax = function (config) {
                    if (!this.http) {
                        throw new Error('Unable to locate angular http module for ajax adapter');
                    }
                    // merge default DataSetAdapter Settings with config arg
                    if (!core.isEmpty(this.defaultSettings)) {
                        var compositeConfig = core.extend({}, this.defaultSettings);
                        config = core.extend(compositeConfig, config);
                        // extend is shallow; extend headers separately
                        var headers_1 = core.extend({}, this.defaultSettings['headers']); // copy default headers 1st
                        config['headers'] = core.extend(headers_1, config.headers);
                    }
                    if (config.crossDomain) {
                        throw new Error(this.name + ' does not support JSONP (jQuery.ajax:crossDomain) requests');
                    }
                    var url = config.url;
                    if (!core.isEmpty(config.params)) {
                        // Hack: Not sure how Angular handles writing 'search' parameters to the url.
                        // so this approach takes over the url param writing completely.
                        var delim = (url.indexOf('?') >= 0) ? '&' : '?';
                        url = url + delim + encodeParams(config.params);
                    }
                    var headers = new http_1.Headers(config.headers || {});
                    if (!headers.has('Content-Type')) {
                        if (config.contentType !== false) {
                            headers.set('Content-Type', config.contentType || 'application/json; charset=utf-8');
                        }
                    }
                    // Create the http request body which must be stringified
                    var body = config.data;
                    if (body && typeof body !== 'string') {
                        body = JSON.stringify(body);
                    }
                    ;
                    var reqOptions = new http_1.RequestOptions({
                        url: url,
                        method: (config.type || 'GET').toUpperCase(),
                        headers: headers,
                        body: body,
                    });
                    var request = new http_1.Request(reqOptions);
                    var requestInfo = {
                        adapter: this,
                        requestOptions: reqOptions,
                        request: request,
                        dsaConfig: config,
                        success: successFn,
                        error: errorFn // adapter's error callback
                    };
                    if (core.isFunction(this.requestInterceptor)) {
                        this.requestInterceptor(requestInfo);
                        if (this.requestInterceptor['oneTime']) {
                            this.requestInterceptor = null;
                        }
                    }
                    if (requestInfo.request) {
                        return this.http.request(requestInfo.request)
                            .map(extractData)
                            .toPromise()
                            .then(requestInfo.success)
                            .catch(requestInfo.error);
                    }
                    else {
                        return Promise.resolve(null);
                    }
                    function extractData(response) {
                        var data;
                        var dt = requestInfo.dsaConfig.dataType;
                        // beware:`res.json` and `res.text` will be async some day
                        if (dt && dt !== 'json') {
                            data = response.text ? response.text() : null;
                        }
                        else {
                            data = response.json ? response.json() : null;
                        }
                        return { data: data, response: response };
                    }
                    function successFn(_a) {
                        var data = _a.data, response = _a.response;
                        if (response.status < 200 || response.status >= 300) {
                            throw { data: data, response: response };
                        }
                        var httpResponse = {
                            config: requestInfo.request,
                            data: data,
                            getHeaders: makeGetHeaders(response),
                            ngConfig: requestInfo.request,
                            status: response.status,
                            statusText: response.statusText,
                            response: response
                        };
                        config.success(httpResponse);
                        return Promise.resolve(httpResponse);
                    }
                    function errorFn(arg) {
                        if (arg instanceof Error) {
                            return Promise.reject(arg); // program error; nothing we can do
                        }
                        else {
                            var data = arg.data;
                            var response = arg.response;
                            // Timeout appears as an error with status===0 and no data.
                            if (response.status === 0 && data == null) {
                                data = 'timeout';
                            }
                            var httpResponse = {
                                config: requestInfo.request,
                                data: data,
                                getHeaders: makeGetHeaders(response),
                                ngConfig: requestInfo.request,
                                status: response.status,
                                statusText: response.statusText,
                                response: response
                            };
                            config.error(httpResponse);
                            return Promise.reject(httpResponse);
                        }
                    }
                };
                ;
                AjaxAngular2Adapter.adapterName = 'angular2';
                return AjaxAngular2Adapter;
            }());
            exports_1("AjaxAngular2Adapter", AjaxAngular2Adapter);
        }
    }
});
//# sourceMappingURL=breeze-http-ajax-adapter.js.map