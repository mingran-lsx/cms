import SxRequest from "@/services/index";

enum DashboardAPI {
    categoryGoodsCount = '/goods/category/count',
    categoryGoodsSale = '/goods/category/sale',
    categoryGoodsFavor = '/goods/category/favor',
    addressGoodsSale = '/goods/address/sale',
}
export function getCategoryGoodsCount() {
    return SxRequest.get({
        url: DashboardAPI.categoryGoodsCount,
    });
}
export function getCategoryGoodsSale() {
    return SxRequest.get({
        url: DashboardAPI.categoryGoodsSale,
    });
}
export function getCategoryGoodsFavor() {
    return SxRequest.get({
        url: DashboardAPI.categoryGoodsFavor,
    });
}
export function getAddressGoodsSale() {
    return SxRequest.get({
        url: DashboardAPI.addressGoodsSale,
    });
}
