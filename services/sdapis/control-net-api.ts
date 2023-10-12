/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * ControlNetApi - axios parameter creator
 * @export
 */
export const ControlNetApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * ControlNet APIs  All 8 controlnet models are available to be used  - canny - depth - hed - hough - normal - openpose - scribble - segmentation       pass above values in \"controlnet_model\" to choose specific controlnet model  1. controlnet_model : control net model id 2. auto_hint : yes/no, hint canny edge or depth automatically. default \"yes\" 3. prompt: prompt to modify image, keep it detailed as possible 4. init_image : direct image link of model
         * @summary ControlNet Main
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV5ControlnetPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v5/controlnet`;
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
 * ControlNetApi - functional programming interface
 * @export
 */
export const ControlNetApiFp = function(configuration?: Configuration) {
    return {
        /**
         * ControlNet APIs  All 8 controlnet models are available to be used  - canny - depth - hed - hough - normal - openpose - scribble - segmentation       pass above values in \"controlnet_model\" to choose specific controlnet model  1. controlnet_model : control net model id 2. auto_hint : yes/no, hint canny edge or depth automatically. default \"yes\" 3. prompt: prompt to modify image, keep it detailed as possible 4. init_image : direct image link of model
         * @summary ControlNet Main
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5ControlnetPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await ControlNetApiAxiosParamCreator(configuration).apiV5ControlnetPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * ControlNetApi - factory interface
 * @export
 */
export const ControlNetApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * ControlNet APIs  All 8 controlnet models are available to be used  - canny - depth - hed - hough - normal - openpose - scribble - segmentation       pass above values in \"controlnet_model\" to choose specific controlnet model  1. controlnet_model : control net model id 2. auto_hint : yes/no, hint canny edge or depth automatically. default \"yes\" 3. prompt: prompt to modify image, keep it detailed as possible 4. init_image : direct image link of model
         * @summary ControlNet Main
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV5ControlnetPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return ControlNetApiFp(configuration).apiV5ControlnetPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * ControlNetApi - object-oriented interface
 * @export
 * @class ControlNetApi
 * @extends {BaseAPI}
 */
export class ControlNetApi extends BaseAPI {
    /**
     * ControlNet APIs  All 8 controlnet models are available to be used  - canny - depth - hed - hough - normal - openpose - scribble - segmentation       pass above values in \"controlnet_model\" to choose specific controlnet model  1. controlnet_model : control net model id 2. auto_hint : yes/no, hint canny edge or depth automatically. default \"yes\" 3. prompt: prompt to modify image, keep it detailed as possible 4. init_image : direct image link of model
     * @summary ControlNet Main
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ControlNetApi
     */
    public async apiV5ControlnetPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return ControlNetApiFp(this.configuration).apiV5ControlnetPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
