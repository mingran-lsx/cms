import SxRequest from "./request";
import {AxiosRequestConfig, AxiosResponse} from "axios";
import localCache from "@/utils/cache";
const request = new SxRequest({
    baseURL: "http://152.136.185.210:5000",
    timeout: 10000,
    showLoading: true,
    interceptors: {
        requestInterceptor: (config) => {
            const token = localCache.get('token');
            if (token) {
                // @ts-ignore
                config.headers.Authorization = `Bearer ${token}`; // 设置Authorization
            }
            return config;
        },
        // responseInterceptor: (res: AxiosResponse) => {
        //     console.log( "response 本次请求拦截器",res);
        //     return res;
        // }

    }
});
export default request;