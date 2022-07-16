import axios, {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";
import {SxRequestConfig, SxRequestInterceptors} from "@/services/request/type"; // 导入axios
// import
import {ElLoading} from "element-plus";
import {LoadingInstance} from "element-plus/es/components/loading/src/loading";


let DEFAULTLOADING: boolean = true;

class SxRequest {
    instance: AxiosInstance;
    interceptors: SxRequestInterceptors | undefined;
    loading?: LoadingInstance;
    showLoading: boolean = false;

    constructor(config: SxRequestConfig) {// 实例化axios
        this.instance = axios.create(config);//创建axios实例
        this.interceptors = config.interceptors;//拦截器     // 定义局部拦截器
        this.showLoading = config.showLoading ?? DEFAULTLOADING;// 加载动画
        // 定义请求拦截器
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestErrorInterceptor
        );
        // 定义响应拦截器
        this.instance.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseErrorInterceptor
        );
        //添加全局拦截器
        this.instance.interceptors.request.use(
            (config) => {
                // //console.log("request 全局请求拦截器");

                if (this.showLoading) {
                    this.loading = ElLoading.service({
                        text: '加载中...', //加载文字
                        //设置加载图标
                        spinner: 'el-icon-loading',
                        background: 'rgba(0,0,0,0.5)', //背景色
                        lock: true, //是否锁屏
                        body: true, //是否包含文字
                    });
                }
                return config;
            },
            (error) => {
                //console.log("request 全局请求拦截器");
                return Promise.reject(error);
            });

        let _this = this;
        this.instance.interceptors.response.use((res) => {
            //console.log(res, "response 全局响应拦截器");
            setTimeout(() => _this.loading?.close(), 3000);

            if (res.data.returnCode === "-1001") {
                // 跳转到登录页面
                window.location.href = "/login";
            } else {
                return res;//res.data
            }
        }, (error) => {
            //console.log(error, "error");
            return Promise.reject(error);
        });

    }

    request<T=any>(config: SxRequestConfig): Promise<T> {// 发送请求
        return new Promise<T>((resolve, reject) => {
            // 1.单个请求对请求config的处理

            if (config.showLoading === !DEFAULTLOADING) {
                this.showLoading = !DEFAULTLOADING;
            }

            if (config.interceptors?.requestInterceptor) {
                config = config.interceptors.requestInterceptor(config);
                //console.log(config, "request Interceptor get/post/put/delete请求拦截器");
            }
            // 2.单个请求对响应的处理
            this.instance.request(config).then((res) => {
                if (config.interceptors?.responseInterceptor) {
                    res = config.interceptors.responseInterceptor(res);
                }
                //console.log(res);
                //关闭加载动画    关闭加载动画
                this.showLoading = DEFAULTLOADING
                resolve(res.data);
            }).catch((err) => {
                //console.log(err);
                this.showLoading = DEFAULTLOADING;
                reject(err);
            })

        })
    }
    get<T=any>(config: SxRequestConfig): Promise<T> {
        return this.request<T>({
            method: "get",
            ...config // 合并配置
        })
    }
    post<T=any>(config: SxRequestConfig): Promise<T> {
        return this.request<T>({
            method: "post",
            ...config // 合并配置
        })
    }
    patch<T=any>(config: SxRequestConfig): Promise<T> {
        return this.request<T>({
            method: "patch",
            ...config // 合并配置
        })

    }
    delete<T=any>(config: SxRequestConfig): Promise<T> {
        return this.request<T>({
            method: "delete",
            ...config // 合并配置
        })
    }

}

export default SxRequest;