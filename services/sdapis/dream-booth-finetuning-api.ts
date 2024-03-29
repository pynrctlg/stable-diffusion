/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * DreamBoothFinetuningApi - axios parameter creator
 * @export
 */
export const DreamBoothFinetuningApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancle Training
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3CancleTrainingModelIdPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/cancle_training/model_id`;
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
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3FineTunePost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/fine_tune`;
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
        apiV3FineTuneStatusDyxjeiQ6kgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/fine_tune_status/dyxjeiQ6kg`;
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
         * @summary Delete Drembooth Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3FinetuneDeleteYourModelIdPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/finetune/delete/your_model_id`;
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
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request Copy
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV3LoraFineTunePost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v3/lora_fine_tune`;
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
 * DreamBoothFinetuningApi - functional programming interface
 * @export
 */
export const DreamBoothFinetuningApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Cancle Training
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3CancleTrainingModelIdPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothFinetuningApiAxiosParamCreator(configuration).apiV3CancleTrainingModelIdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3FineTunePost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamBoothFinetuningApiAxiosParamCreator(configuration).apiV3FineTunePost(body, options);
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
        async apiV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamBoothFinetuningApiAxiosParamCreator(configuration).apiV3FineTuneStatusDyxjeiQ6kgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Delete Drembooth Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3FinetuneDeleteYourModelIdPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothFinetuningApiAxiosParamCreator(configuration).apiV3FinetuneDeleteYourModelIdPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request Copy
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3LoraFineTunePost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamBoothFinetuningApiAxiosParamCreator(configuration).apiV3LoraFineTunePost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DreamBoothFinetuningApi - factory interface
 * @export
 */
export const DreamBoothFinetuningApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary Cancle Training
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3CancleTrainingModelIdPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothFinetuningApiFp(configuration).apiV3CancleTrainingModelIdPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3FineTunePost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamBoothFinetuningApiFp(configuration).apiV3FineTunePost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Get Training Status
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamBoothFinetuningApiFp(configuration).apiV3FineTuneStatusDyxjeiQ6kgPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Delete Drembooth Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3FinetuneDeleteYourModelIdPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothFinetuningApiFp(configuration).apiV3FinetuneDeleteYourModelIdPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
         * @summary Create Dreambooth Request Copy
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV3LoraFineTunePost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamBoothFinetuningApiFp(configuration).apiV3LoraFineTunePost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DreamBoothFinetuningApi - object-oriented interface
 * @export
 * @class DreamBoothFinetuningApi
 * @extends {BaseAPI}
 */
export class DreamBoothFinetuningApi extends BaseAPI {
    /**
     * 
     * @summary Cancle Training
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothFinetuningApi
     */
    public async apiV3CancleTrainingModelIdPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothFinetuningApiFp(this.configuration).apiV3CancleTrainingModelIdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
     * @summary Create Dreambooth Request
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothFinetuningApi
     */
    public async apiV3FineTunePost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamBoothFinetuningApiFp(this.configuration).apiV3FineTunePost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Get Training Status
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothFinetuningApi
     */
    public async apiV3FineTuneStatusDyxjeiQ6kgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamBoothFinetuningApiFp(this.configuration).apiV3FineTuneStatusDyxjeiQ6kgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Delete Drembooth Model
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothFinetuningApi
     */
    public async apiV3FinetuneDeleteYourModelIdPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothFinetuningApiFp(this.configuration).apiV3FinetuneDeleteYourModelIdPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * **instance_prompt**: how you want to call trained object  **class_prompt**: class without prompt  **images**: make sure images are direct links, cropped in 512x512 : keep it about 7-8 images  **seed**: keep it null or 0  **training_type**: type of object you are training on:  1. men : to train on faces of men 2. female: to train on faces of female 3. null: to train on object or anything       **max_train_steps**: keep it 2X number of images: Max: 2000  **webhook**: get post call when training is completed
     * @summary Create Dreambooth Request Copy
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothFinetuningApi
     */
    public async apiV3LoraFineTunePost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamBoothFinetuningApiFp(this.configuration).apiV3LoraFineTunePost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
