import {AxiosRequestConfig, AxiosResponse} from "axios";
  export interface SxRequestInterceptors<T=AxiosResponse> {// 定义拦截器   可以定义多个拦截器
    requestInterceptor?(config: AxiosRequestConfig): AxiosRequestConfig;//非必选参数
    requestErrorInterceptor?(error: any): any;//非必选参数
    responseInterceptor?(response: T): T;//非必选参数
    responseErrorInterceptor?(error: any): any;//非必选参数
}
export interface SxRequestConfig<T=AxiosResponse> extends AxiosRequestConfig {
    interceptors?: SxRequestInterceptors<T>;// 定义拦截器
    showLoading?: boolean;// 定义是否显示loading
}

