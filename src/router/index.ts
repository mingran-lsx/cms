import {createRouter, createWebHashHistory, RouteRecordRaw} from "vue-router";
import {firstMenu} from "@/utils/map-menu";
import LocalCache from "@/utils/cache";

const routes: Array<RouteRecordRaw> = [
    {
        path: "/login",
        name: "login",
        component: () => import(/* webpackChunkName: "login" */ "../views/login/login.vue"),
    },
    {
        path: "/main",
        name: "main",
        component: () => import(/* webpackChunkName: "main" */ "../views/main/main.vue"),
    },
    {
        path: "/",
        redirect: "/main",
    },
    {
        path:"/:pathMatch(.*)*",
        name: '404',
        component: () => import('@/views/404/404.vue')
    },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

router.beforeEach((to) => {
    if (to.path !== '/login') {
        const token = LocalCache.get('token')
        if (!token) {
            return "/login";
        }
    }
    if(to.path==="/main"){
        return firstMenu.url;
    }
})
export default router;
