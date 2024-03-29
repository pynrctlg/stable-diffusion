/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * DreamboothSandboxAPIApi - axios parameter creator
 * @export
 */
export const DreamboothSandboxAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSandboxV3FineTunePost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sandbox/v3/fine_tune`;
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
         * @summary Get Training Status
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiSandboxV3FineTuneStatusDyxjeiQ6kgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/sandbox/v3/fine_tune_status/dyxjeiQ6kg`;
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
 * DreamboothSandboxAPIApi - functional programming interface
 * @export
 */
export const DreamboothSandboxAPIApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSandboxV3FineTunePost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamboothSandboxAPIApiAxiosParamCreator(configuration).apiSandboxV3FineTunePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Get Training Status
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamboothSandboxAPIApiAxiosParamCreator(configuration).apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DreamboothSandboxAPIApi - factory interface
 * @export
 */
export const DreamboothSandboxAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSandboxV3FineTunePost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamboothSandboxAPIApiFp(configuration).apiSandboxV3FineTunePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Training Status
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamboothSandboxAPIApiFp(configuration).apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DreamboothSandboxAPIApi - object-oriented interface
 * @export
 * @class DreamboothSandboxAPIApi
 * @extends {BaseAPI}
 */
export class DreamboothSandboxAPI extends BaseAPI {
    /**
     * 
     * @summary Create Dreambooth Request
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamboothSandboxAPI
     */
    public async apiSandboxV3FineTunePost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamboothSandboxAPIApiFp(this.configuration).apiSandboxV3FineTunePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Training Status
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamboothSandboxAPIApi
     */
    public async apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamboothSandboxAPIApiFp(this.configuration).apiSandboxV3FineTuneStatusDyxjeiQ6kgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
