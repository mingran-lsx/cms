import {Module} from "vuex";
import {IDashboardState} from "@/store/main/dashboard/types";
import {IRootState} from "@/store/type";
import {
  getAddressGoodsSale,
  getCategoryGoodsCount,
  getCategoryGoodsFavor,
  getCategoryGoodsSale
} from "@/services/main/dashboard/dashboard";

const dashboardModel :Module<IDashboardState, IRootState> = {
    namespaced: true,
    state() {
        return {
            categoryGoodsCount: [],
            categoryGoodsSale: [],
            categoryGoodsFavor: [],
            addressGoodsSale: [],
        }

    },
    actions: {
        async getDashboardDataAction({commit}, payload) {
            const categoryGoodsCount = await getCategoryGoodsCount()
            const categoryGoodsSale = await getCategoryGoodsSale()
            const categoryGoodsFavor = await getCategoryGoodsFavor()
            const addressGoodsSale = await getAddressGoodsSale()
            commit('setDashboardData', {categoryGoodsCount: categoryGoodsCount.data, categoryGoodsSale: categoryGoodsSale.data, categoryGoodsFavor: categoryGoodsFavor.data, addressGoodsSale: addressGoodsSale.data})
        }
    },
    mutations: {
        setDashboardData(state, payload) {
            state.categoryGoodsCount = payload.categoryGoodsCount
            state.categoryGoodsSale = payload.categoryGoodsSale
            state.categoryGoodsFavor = payload.categoryGoodsFavor
            state.addressGoodsSale = payload.addressGoodsSale
        }
    }
}

export default dashboardModel;