/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * V5APIsApi - axios parameter creator
 * @export
 */
export const V5APIsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Depth2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5Depth2imgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/depth2img`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers?.['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Interior
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5InteriorPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/interior`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers?.['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Kendsky
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5KendeskyPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/kendesky`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers?.['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Pix2PIx
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5Pix2pixPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/pix2pix`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers?.['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5Text2videoPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/text2video`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions :AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            localVarHeaderParameter['Content-Type'] = 'application/json';

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.params) {
                query.set(key, options.params[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers?.['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * V5APIsApi - functional programming interface
 * @export
 */
export const V5APIsApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Depth2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Depth2imgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await V5APIsApiAxiosParamCreator(configuration).apiV5Depth2imgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Interior
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5InteriorPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await V5APIsApiAxiosParamCreator(configuration).apiV5InteriorPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Kendsky
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5KendeskyPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await V5APIsApiAxiosParamCreator(configuration).apiV5KendeskyPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Pix2PIx
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Pix2pixPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await V5APIsApiAxiosParamCreator(configuration).apiV5Pix2pixPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Text2videoPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await V5APIsApiAxiosParamCreator(configuration).apiV5Text2videoPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * V5APIsApi - factory interface
 * @export
 */
export const V5APIsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Depth2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Depth2imgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return V5APIsApiFp(configuration).apiV5Depth2imgPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Interior
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5InteriorPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return V5APIsApiFp(configuration).apiV5InteriorPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Kendsky
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5KendeskyPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return V5APIsApiFp(configuration).apiV5KendeskyPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
         * @summary Pix2PIx
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Pix2pixPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return V5APIsApiFp(configuration).apiV5Pix2pixPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5Text2videoPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return V5APIsApiFp(configuration).apiV5Text2videoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * V5APIsApi - object-oriented interface
 * @export
 * @class V5APIsApi
 * @extends {BaseAPI}
 */
export class V5API extends BaseAPI {
    /**
     * 
     * @summary Depth2Img
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V5APIsApi
     */
    public async apiV5Depth2imgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return V5APIsApiFp(this.configuration).apiV5Depth2imgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
     * @summary Interior
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V5APIsApi
     */
    public async apiV5InteriorPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return V5APIsApiFp(this.configuration).apiV5InteriorPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
     * @summary Kendsky
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V5APIsApi
     */
    public async apiV5KendeskyPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return V5APIsApiFp(this.configuration).apiV5KendeskyPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Now edit images using prompt.  Send init_image and write prompt to edit image, and you will get edited image in response.
     * @summary Pix2PIx
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V5APIsApi
     */
    public async apiV5Pix2pixPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return V5APIsApiFp(this.configuration).apiV5Pix2pixPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Text 2 Video
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof V5APIsApi
     */
    public async apiV5Text2videoPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return V5APIsApiFp(this.configuration).apiV5Text2videoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
