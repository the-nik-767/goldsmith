/*
 * @file: index.js
 * @description: It Contains rest functions for API calls.
 * @author: Poonam
 */

import axios from 'axios';
import ApiKey from './ApiKey';

var config = {
    headers: { 'Content-Type': 'application/json' , "ngrok-skip-browser-warning": "69420"},
};

var fileConfig = {
    headers: { 'Content-Type': 'multipart/form-data' },
};

var baseUrl = ApiKey.api;

const handleError = (error, errorHandler) => {
    if (errorHandler) {
        errorHandler(error);
    } else {
        console.error('Unhandled error:', error);
    }
}

class ApiClient {
    static post(url, params, isContainFile, base = '', errorHandler = null) {
        let apiUrl = baseUrl + url;
        if (base) apiUrl = base + url;

        let Config = config;
        if (isContainFile) Config = fileConfig;

        return new Promise(function (fulfill, reject) {
            axios
                .post(apiUrl, params, Config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, errorHandler);
                        fulfill({ ...eres.data, success: false });
                    } else {
                        handleError('Network Error', errorHandler);
                        reject(error);
                    }
                });
        });
    }

    static put(url, params, base = '', errorHandler = null) {
        let apiUrl = baseUrl + url;
        if (base) apiUrl = base + url;

        return new Promise(function (fulfill, reject) {
            axios
                .put(apiUrl, JSON.stringify(params), config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, errorHandler);
                        fulfill(eres.data);
                    } else {
                        handleError('Network Error', errorHandler);
                        reject(error);
                    }
                });
        });
    }

    static get(url, params = {}, base = '', errorHandler = null) {
        let apiUrl = baseUrl + url;
        if (base) apiUrl = base + url;

        let query = Object.keys(params).length > 0 ? `?${new URLSearchParams(params).toString()}` : '';
        apiUrl += query;

        return new Promise(function (fulfill, reject) {
            axios
                .get(apiUrl, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, errorHandler);
                        fulfill({ ...eres.data, success: false });
                    } else {
                        handleError('Network Error', errorHandler);
                        reject(error);
                    }
                });
        });
    }

    static delete(url, params = {}, base = '', errorHandler = null) {
        let apiUrl = baseUrl + url;
        if (base) apiUrl = base + url;

        let query = Object.keys(params).length > 0 ? `?${new URLSearchParams(params).toString()}` : '';
        apiUrl += query;

        return new Promise(function (fulfill, reject) {
            axios
                .delete(apiUrl, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, errorHandler);
                        fulfill(eres.data);
                    } else {
                        handleError('Network Error', errorHandler);
                        reject(error);
                    }
                });
        });
    }

    static allApi(url, params, method = 'get') {
        if (method === 'get') {
            return this.get(url, params);
        } else if (method === 'put') {
            return this.put(url, params);
        } else if (method === 'post') {
            return this.post(url, params);
        }
    }

    static postFormData(url, params, errorHandler = null) {
        let apiUrl = baseUrl + url;

        return new Promise(function (fulfill, reject) {
            var body = new FormData();
            Object.keys(params).forEach(key => body.append(key, params[key]));

            axios
                .post(apiUrl, body, config)
                .then(function (response) {
                    fulfill(response && response.data);
                })
                .catch(function (error) {
                    if (error && error.response) {
                        let eres = error.response;
                        handleError(eres.data, errorHandler);
                        fulfill(eres.data);
                    } else {
                        handleError('Network Error', errorHandler);
                        reject(error);
                    }
                });
        });
    }
}

export default ApiClient;

  