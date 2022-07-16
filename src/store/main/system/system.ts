import {Module} from "vuex";
import {IRootState} from "@/store/type";
import {ISystemState} from "@/store/main/system/types";
import {addPageData, deletePageDataById, getPageListByPageInfo, updatePageData} from "@/services/main/system/system";
import {firstUpperCase} from "@/utils/firstUpperCase";


const systemModel: Module<ISystemState, IRootState> = {
    namespaced: true,
    state(){
        return {
            usersList: [],
            usersTotalCount: 0,
            roleList: [],
            roleTotalCount: 0,
            menuList: [],
            menuTotalCount: 0,
            goodsList: [],
            goodsTotalCount: 0,
        }
    },
    actions:{
      async  getPageList({commit},payload){
          const pageUrl = `/${payload.pageName}/list`;
            const {data}=await getPageListByPageInfo(pageUrl,payload.queryInfo);
            commit(`set${firstUpperCase(payload.pageName)}List`,data.list);
            commit(`set${firstUpperCase(payload.pageName)}TotalCount`,data.totalCount);
        },
        async createPageAction({dispatch},payload){
            console.log('createPageAction',payload);
            const pageName=`/${payload.pageName}`;
         await addPageData(pageName,payload.data);

         ///重新加载列表
            dispatch(`getPageList`,{pageName:payload.pageName,queryInfo:{
                offset:0,
                size:10
                    }
            });
        },
        async editPageAction({dispatch},payload){
            console.log('editPageAction',payload);
            const pageName=`/${payload.pageName}/${payload.id}`;
            await updatePageData(pageName,payload.data);

            ///重新加载列表
            dispatch(`getPageList`,{pageName:payload.pageName,queryInfo:{
                offset:0,
                size:10
                }
            });
        },
        async deletePageAction({dispatch},payload){
            console.log('deletePageAction',payload);
            const pageName=`/${payload.pageName}/${payload.id}`;
            await deletePageDataById(pageName);

            ///重新加载列表
            dispatch(`getPageList`,{pageName:payload.pageName,queryInfo:{
                offset:0,
                size:10
                }
            });

        }
    },
    mutations:{
        setUsersList(state, payload){
            state.usersList = payload;
        },
        setUsersTotalCount(state, payload){
            state.usersTotalCount = payload;
        },
        setRoleList(state, payload){
            state.roleList = payload;
        },
        setRoleTotalCount(state, payload){
            state.roleTotalCount = payload;
        },
        setGoodsList(state, payload){
            state.goodsList = payload;
        },
        setGoodsTotalCount(state, payload){
            state.goodsTotalCount = payload;
        },
        setMenuList(state, payload){
            state.menuList = payload;
        },
        setMenuTotalCount(state, payload){
            state.menuTotalCount = payload;
        }
    }
}

export default systemModel;