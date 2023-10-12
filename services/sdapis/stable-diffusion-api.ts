/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * StableDiffusionAPIApi - axios parameter creator
 * @export
 */
export const StableDiffusionAPIApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
       
        /**
         * Generate images using Stable diffusion
         * @summary Image 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3Img2imgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/img2img`;
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
         * Generate images using Stable diffusion
         * @summary Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3InpaintPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/inpaint`;
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
         * @summary Stable Diffusion API System Load
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3SystemLoadPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/system_load`;
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
         * Text2Image API to generate image from prompt
         * @summary Text 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3Text2imgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/text2img`;
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
         * @summary Text to 3D
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3TxtTo3dPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/txt_to_3d`;
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
 * StableDiffusionAPIApi - functional programming interface
 * @export
 */
export const StableDiffusionAPIApiFp = function(configuration?: Configuration) {
    return {
        
        /**
         * Generate images using Stable diffusion
         * @summary Image 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3Img2imgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await StableDiffusionAPIApiAxiosParamCreator(configuration).apiV3Img2imgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Generate images using Stable diffusion
         * @summary Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3InpaintPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await StableDiffusionAPIApiAxiosParamCreator(configuration).apiV3InpaintPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Stable Diffusion API System Load
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3SystemLoadPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await StableDiffusionAPIApiAxiosParamCreator(configuration).apiV3SystemLoadPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Text2Image API to generate image from prompt
         * @summary Text 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3Text2imgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await StableDiffusionAPIApiAxiosParamCreator(configuration).apiV3Text2imgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Text to 3D
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3TxtTo3dPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await StableDiffusionAPIApiAxiosParamCreator(configuration).apiV3TxtTo3dPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * StableDiffusionAPIApi - factory interface
 * @export
 */
export const StableDiffusionAPIApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        
        /**
         * Generate images using Stable diffusion
         * @summary Image 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3Img2imgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return StableDiffusionAPIApiFp(configuration).apiV3Img2imgPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Generate images using Stable diffusion
         * @summary Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3InpaintPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return StableDiffusionAPIApiFp(configuration).apiV3InpaintPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Stable Diffusion API System Load
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3SystemLoadPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return StableDiffusionAPIApiFp(configuration).apiV3SystemLoadPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Text2Image API to generate image from prompt
         * @summary Text 2 Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3Text2imgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return StableDiffusionAPIApiFp(configuration).apiV3Text2imgPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Text to 3D
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3TxtTo3dPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return StableDiffusionAPIApiFp(configuration).apiV3TxtTo3dPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * StableDiffusionAPIApi - object-oriented interface
 * @export
 * @class StableDiffusionAPIApi
 * @extends {BaseAPI}
 */
export class StableDiffusionAPI extends BaseAPI {
   
    /**
     * Generate images using Stable diffusion
     * @summary Image 2 Image
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StableDiffusionAPIApi
     */
    public async apiV3Img2imgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return StableDiffusionAPIApiFp(this.configuration).apiV3Img2imgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Generate images using Stable diffusion
     * @summary Inpainting
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StableDiffusionAPIApi
     */
    public async apiV3InpaintPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return StableDiffusionAPIApiFp(this.configuration).apiV3InpaintPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Stable Diffusion API System Load
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StableDiffusionAPIApi
     */
    public async apiV3SystemLoadPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return StableDiffusionAPIApiFp(this.configuration).apiV3SystemLoadPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Text2Image API to generate image from prompt
     * @summary Text 2 Image
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StableDiffusionAPI
     */
    public async apiV3Text2imgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return StableDiffusionAPIApiFp(this.configuration).apiV3Text2imgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Text to 3D
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof StableDiffusionAPIApi
     */
    public async apiV3TxtTo3dPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return StableDiffusionAPIApiFp(this.configuration).apiV3TxtTo3dPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
