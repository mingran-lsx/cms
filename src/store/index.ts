import {createStore,Store, useStore as vuexUserStore} from "vuex";
import {IRootState} from "@/store/type";
import {ILoginModule} from "@/store/login/login";
import {IRootWithModelState} from "@/store/type";
import ISystemModule from "@/store/main/system/system";
import {getPageListByPageInfo} from "@/services/main/system/system";
import dashboardModel from "@/store/main/dashboard/dashboard";
const store = createStore<IRootState>({
    state: {
        name: "",
        age: "",
        entireDepartments: [],
        entireRoles: [],
        entireMenus: [],
    },
    getters: {},
    mutations: {
        setEntireDepartments(state, entireDepartments) {
            state.entireDepartments = entireDepartments;
        },
        setEntireRoles(state, entireRoles) {
            state.entireRoles = entireRoles;
        },
        setEntireMenus(state, entireMenu) {
            state.entireMenus = entireMenu;
            state.entireMenus = entireMenu;
        }
    },
    actions: {
        async getInitialDataAction({commit}) {
            const departmentResult =await getPageListByPageInfo('/department/list', {
                offset: 0,
                size: 1000,
            })
           const roleResult =await getPageListByPageInfo('/role/list', {
             offset: 0,
             size: 1000,
           })
            const menuResult =await getPageListByPageInfo('/menu/list', {
                // offset: 0,
                // size: 1000,
            })
           commit('setEntireDepartments', departmentResult.data.list);
            commit('setEntireRoles', roleResult.data.list);
            commit('setEntireMenus', menuResult.data.list);
        }
    },
    modules: {
        login: ILoginModule,
        system: ISystemModule,
        dashboard: dashboardModel,

    }
});

export function setupStore() {
    store.dispatch("login/getLocalCache");
    store.dispatch("getInitialDataAction");
}
export function useStore(): Store<IRootWithModelState> {
    return vuexUserStore();
}

export default store;
