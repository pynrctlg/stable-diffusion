/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * SDAPI4Api - axios parameter creator
 * @export
 */
export const SDAPI4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Segment Anything
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5GroundSegmentPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/ground_segment`;
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
 * SDAPI4Api - functional programming interface
 * @export
 */
export const SDAPI4ApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Segment Anything
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5GroundSegmentPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await SDAPI4ApiAxiosParamCreator(configuration).apiV5GroundSegmentPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * SDAPI4Api - factory interface
 * @export
 */
export const SDAPI4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Segment Anything
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5GroundSegmentPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return SDAPI4ApiFp(configuration).apiV5GroundSegmentPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SDAPI4Api - object-oriented interface
 * @export
 * @class SDAPI4Api
 * @extends {BaseAPI}
 */
export class SDAPI4Api extends BaseAPI {
    /**
     * 
     * @summary Segment Anything
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SDAPI4Api
     */
    public async apiV5GroundSegmentPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return SDAPI4ApiFp(this.configuration).apiV5GroundSegmentPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
