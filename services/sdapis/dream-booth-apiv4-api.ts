/* tslint:disable */
/* eslint-disable */

import globalAxios, { AxiosResponse, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
/**
 * DreamBoothAPIV4Api - axios parameter creator
 * @export
 */
export const DreamBoothAPIV4ApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary DreamBooth Fetch Queued Images
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothFetchPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth/fetch`;
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
         * @summary Dreambooth Img2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothImg2imgPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth/img2img`;
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
         * @summary Dreambooth Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothInpaintPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth/inpaint`;
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
         * After 7 days of inactivity, model will be deleted from inference server.  To reload a model and using it again, you can make api call. it will take 2 minutes to reload a model.
         * @summary DreamBooth Reload Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothModelReloadPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth/model_reload`;
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
         * Use dreambooth text2img API to generate images from any custom trained model or from any publicly available model.  You can also pass scheduler in API  possible values for scheduler are  - DDPMScheduler - PNDMScheduler - EulerAncestralDiscreteScheduler - DDIMScheduler - LMSDiscreteScheduler - EulerDiscreteScheduler - DPMSolverMultistepScheduler
         * @summary Lora Text2Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth`;
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
         * Create video from a trained model or publicly available community models.  Pass prompt and it will generate video with model_id
         * @summary Dreambooth Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        apiV4DreamboothText2videoPost: async (body?: any, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/api/v4/dreambooth/text2video`;
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
 * DreamBoothAPIV4Api - functional programming interface
 * @export
 */
export const DreamBoothAPIV4ApiFp = function(configuration?: Configuration) {
    return {
        /**
         * 
         * @summary DreamBooth Fetch Queued Images
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothFetchPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothFetchPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Dreambooth Img2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothImg2imgPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothImg2imgPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * 
         * @summary Dreambooth Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothInpaintPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothInpaintPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * After 7 days of inactivity, model will be deleted from inference server.  To reload a model and using it again, you can make api call. it will take 2 minutes to reload a model.
         * @summary DreamBooth Reload Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothModelReloadPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothModelReloadPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Use dreambooth text2img API to generate images from any custom trained model or from any publicly available model.  You can also pass scheduler in API  possible values for scheduler are  - DDPMScheduler - PNDMScheduler - EulerAncestralDiscreteScheduler - DDIMScheduler - LMSDiscreteScheduler - EulerDiscreteScheduler - DPMSolverMultistepScheduler
         * @summary Lora Text2Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<any>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create video from a trained model or publicly available community models.  Pass prompt and it will generate video with model_id
         * @summary Dreambooth Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothText2videoPost(body?: any, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => Promise<AxiosResponse<void>>> {
            const localVarAxiosArgs = await DreamBoothAPIV4ApiAxiosParamCreator(configuration).apiV4DreamboothText2videoPost(body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs :AxiosRequestConfig = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * DreamBoothAPIV4Api - factory interface
 * @export
 */
export const DreamBoothAPIV4ApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * 
         * @summary DreamBooth Fetch Queued Images
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothFetchPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothFetchPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Dreambooth Img2Img
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothImg2imgPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothImg2imgPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Dreambooth Inpainting
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothInpaintPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothInpaintPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * After 7 days of inactivity, model will be deleted from inference server.  To reload a model and using it again, you can make api call. it will take 2 minutes to reload a model.
         * @summary DreamBooth Reload Model
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothModelReloadPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothModelReloadPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Use dreambooth text2img API to generate images from any custom trained model or from any publicly available model.  You can also pass scheduler in API  possible values for scheduler are  - DDPMScheduler - PNDMScheduler - EulerAncestralDiscreteScheduler - DDIMScheduler - LMSDiscreteScheduler - EulerDiscreteScheduler - DPMSolverMultistepScheduler
         * @summary Lora Text2Image
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<any>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothPost(body, options).then((request) => request(axios, basePath));
        },
        /**
         * Create video from a trained model or publicly available community models.  Pass prompt and it will generate video with model_id
         * @summary Dreambooth Text 2 Video
         * @param {any} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async apiV4DreamboothText2videoPost(body?: any, options?: AxiosRequestConfig): Promise<AxiosResponse<void>> {
            return DreamBoothAPIV4ApiFp(configuration).apiV4DreamboothText2videoPost(body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * DreamBoothAPIV4Api - object-oriented interface
 * @export
 * @class DreamBoothAPIV4Api
 * @extends {BaseAPI}
 */
export class DreamBoothAPIV4Api extends BaseAPI {
    /**
     * 
     * @summary DreamBooth Fetch Queued Images
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothFetchPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothFetchPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Dreambooth Img2Img
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothImg2imgPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothImg2imgPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * 
     * @summary Dreambooth Inpainting
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothInpaintPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothInpaintPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * After 7 days of inactivity, model will be deleted from inference server.  To reload a model and using it again, you can make api call. it will take 2 minutes to reload a model.
     * @summary DreamBooth Reload Model
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothModelReloadPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothModelReloadPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Use dreambooth text2img API to generate images from any custom trained model or from any publicly available model.  You can also pass scheduler in API  possible values for scheduler are  - DDPMScheduler - PNDMScheduler - EulerAncestralDiscreteScheduler - DDIMScheduler - LMSDiscreteScheduler - EulerDiscreteScheduler - DPMSolverMultistepScheduler
     * @summary Lora Text2Image
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<any>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothPost(body, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create video from a trained model or publicly available community models.  Pass prompt and it will generate video with model_id
     * @summary Dreambooth Text 2 Video
     * @param {any} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DreamBoothAPIV4Api
     */
    public async apiV4DreamboothText2videoPost(body?: any, options?: AxiosRequestConfig) : Promise<AxiosResponse<void>> {
        return DreamBoothAPIV4ApiFp(this.configuration).apiV4DreamboothText2videoPost(body, options).then((request) => request(this.axios, this.basePath));
    }
}
