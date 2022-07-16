import {Module} from "vuex";
import {ILoginState} from "@/store/login/type";
import {IRootState} from "@/store/type";
import {accountLoginRequest, getUserInfoById, getUserMnusById} from "@/services/login/login";
import router from "@/router";
import localCache from "@/utils/cache";
import {mapMenus, mapMenusToPermissions} from "@/utils/map-menu";

export const ILoginModule: Module<ILoginState, IRootState> = {
    namespaced: true,
    state: {
        token: '',
        info: {},
        menus: [],
        permissions: [],
    }
    ,
    actions: {
        async accountLoginAction({commit,dispatch}, payload) {
            let LoginRes = await accountLoginRequest(payload);
            localCache.set('token', LoginRes.data.token);
            localCache.set("name", payload.name);
            localCache.set("password", payload.password);
            commit('setToken', LoginRes.data.token);
            //请求用户信息
            let userInfo = await getUserInfoById(LoginRes.data.id);
            localCache.set('userInfo', userInfo.data);
            commit('setUserInfo', userInfo.data);
            //请求用户菜单
            let userMenus = await getUserMnusById(userInfo.data.id);
            localCache.set('userMenus', userMenus.data);
            commit('setUserMenus', userMenus.data);
            //跳转到首页
            dispatch("getInitialDataAction",null, {root: true});
            await router.push('/main');
        },
        getLocalCache({commit,dispatch}) {
            let token = localCache.get('token');
            let userInfo = localCache.get('userInfo');
            let userMenus = localCache.get('userMenus');
            if (token) {
                commit('setToken', token);
            }
            if (userInfo) {
                commit('setUserInfo', userInfo);
            }
            if (userMenus) {
                commit('setUserMenus', userMenus);
            }
            dispatch("getInitialDataAction",null, {root: true});

        }
    },
    mutations: {
        setToken(state, payload: string) {
            state.token = payload;
        }
        ,
        setUserInfo(state, payload: any) {
            state.info = payload;
        }
        ,
        setUserMenus(state, payload: any[]) {
            state.menus = payload;
            const routers = mapMenus(payload);
           routers.forEach(item => {
                router.addRoute("main", item);//注册路由
           });
           // permissions: [],
            state.permissions = mapMenusToPermissions(payload);
            // console.log(mapMenusToPermissions(payload));
        }
    }
}