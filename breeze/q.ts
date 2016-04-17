/**
 * Minimum necessary deferred object for breeze Q/ES6 Promise adapter
 * Makes ES6 promise look like Q.
 */
export interface Deferred {
    promise: Promise<any>;
    resolve: (value?: {} | PromiseLike<{}>) => void;
    reject: (reason?: any) => void;
}

/**
 * Minimum for breeze breeze Q/ES6 Promise adapter
 */
export const Q = {
    defer(): Deferred {
        let resolve: (value?: {} | PromiseLike<{}>) => void;
        let reject: (reason?: any) => void;
        let promise = new Promise((_resolve, _reject) => {
            resolve = _resolve;
            reject = _reject;
        });
        return {
            promise: promise,
            resolve(value: any) { resolve(value); },
            reject(reason: any) { reject(reason); }
        };
    },

    resolve(value?: {} | PromiseLike<{}>) {
        let deferred: Deferred = Q['defer']();
        deferred.resolve(value);
        return deferred.promise;
    },


    reject(reason?: any) {
        let deferred: Deferred = Q['defer']();
        deferred.reject(reason);
        return deferred.promise;
    }
};
