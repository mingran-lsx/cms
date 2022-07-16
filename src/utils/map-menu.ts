// import {RouteRecordRaw} from 'vue-router';
// import {IBreadcrumb} from "@/base-ui/breadcrumb/types";
// //路由和菜单的映射
// let firstMenu: any = null;
//
// export function mapMenus(menus: any[]): RouteRecordRaw[] {
//     const routes: RouteRecordRaw[] = [];
//     //1.遍历菜单
//     const allMenus: RouteRecordRaw[] = [];//所有的路由
//     //找到所有的路由文件
//     const routerFiles = require.context('@/router/main', true, /\.ts$/);//加载所有的路由文件 @/router/main
//     routerFiles.keys().forEach((key) => {
//         const router = require("../router/main" + key.split(".")[1]);
//         allMenus.push(router.default);
//     })
//     //2.遍历所有路由nopropertys
//     const _recurseGetRouter = (menus: any[]) => {//menus是请求的菜单
//         menus.forEach((menu) => {
//             if (menu.type === 2) {
//                 const router = allMenus.find((router) => router.path === menu.url);
//                 if (router) {
//                     routes.push(router);
//                 }
//             } else {
//                 _recurseGetRouter(menu.children);
//             }
//         });
//     }
//     _recurseGetRouter(menus);
//     //4.返回routes/
//     return routes;
// }
//
// export function pathMapToMenus(menus: any, path: string,breadcrumbs?: IBreadcrumb[]) : any {
//     // console.log(menus, path);
//     for (const menu of menus) {
//         if (menu.type === 1) {
//             const findMenu = pathMapToMenus(menu.children ?? [], path);
//             if (findMenu) {//如果找到了  就返回
//                 breadcrumbs?.push({//添加面包屑
//                     name: menu.name,//面包屑名称
//                     path: menu.url//面包屑路径
//                 })
//                 breadcrumbs?.push({
//                     name: findMenu.name,
//                     path: findMenu.url
//                 } )
//                 return findMenu;
//             }
//         } else if (menu.type === 2 && menu.url === path) {
//             return menu;
//         }
//     }
// } //pathMapToMenus
// export function getBreadcrumbs(menus: any[], path: string): any {
//     console.log(menus, path);
//     const breadcrumbs: IBreadcrumb[] = [];
//     pathMapToMenus(menus, path, breadcrumbs);
//     return breadcrumbs;
// }
// export {
//     firstMenu
// }


import {RouteRecordRaw} from 'vue-router';
import {IBreadcrumb} from "@/base-ui/breadcrumb";

let firstMenu: any = null;

export function mapMenus(menus: any[]): RouteRecordRaw[] {
    const routes: RouteRecordRaw[] = [];
//1.遍历菜单
    const allMenus: RouteRecordRaw[] = [];
    const routerFiles = require.context('@/router/main', true, /\.ts$/);//加载所有的路由文件
    routerFiles.keys().forEach((key) => {
        const router = require("../router/main" + key.split(".")[1]);
        allMenus.push(router.default);
    })  //加载所有的路由文件
    // console.log(allMenus);
    //2.遍历所有路由nop
    const _recurseGetRouter = (menus: any[]) => {
        menus.forEach((menu) => {
            if (menu.type === 2) {
                const router = allMenus.find((router) => router.path === menu.url);
                if (router) {
                    routes.push(router);
                }
                if (!firstMenu) {
                    firstMenu = menu;
                }
            } else {
                _recurseGetRouter(menu.children);
            }
        });
    }
    _recurseGetRouter(menus);
    return routes;
} //mapMenus
export function pathMapToMenus(menus: any, path: string,breadcrumbs?: IBreadcrumb[]) : any {
    // console.log(menus, path);
    for (const menu of menus) {
        if (menu.type === 1) {
            const findMenu = pathMapToMenus(menu.children ?? [], path);
            if (findMenu) {//如果找到了  就返回
                breadcrumbs?.push({//添加面包屑
                    name: menu.name,//面包屑名称
                    path: menu.url//面包屑路径
                })
                breadcrumbs?.push({
                    name: findMenu.name,
                    path: findMenu.url
                } )
                return findMenu;
            }
        } else if (menu.type === 2 && menu.url === path) {
            return menu;
        }
    }
} //pathMapToMenus

export  function getBreadcrumbs(menus:any[] ,path:string): any {
    const breadcrumbs: IBreadcrumb[] = [];
    pathMapToMenus(menus, path,breadcrumbs);
    return  breadcrumbs;
}


// export function mapMenusToPermissions(menus: any[]): any[] {
//     const permissions: any[] = [];
//     const _recurseGetPermission = (menus: any[]) => {
//         menus.forEach((menu) => {
//             if (menu.type === 2||menu.type === 1) {
//                 _recurseGetPermission(menu.children??[]);//如果是菜单类型  就遍历子菜单
//             } else if(menu.type === 3){
//                 permissions.push(menu.permission);
//             }
//         });
//     }
//     _recurseGetPermission(menus);
//     return permissions;
// } //mapMenusToPermissions

export function mapMenusToPermissions(menus: any[]): any[] {
    const permissions: any[] = [];
    const _recurseGetPermission = (menus: any[]) => {
      menus.forEach((menu) => {
        if (menu.type === 2||menu.type === 1) {
          _recurseGetPermission(menu.children??[]);//如果是菜单类型  就遍历子菜单
        } else if(menu.type === 3){
          permissions.push(menu.permission);
        }
      });
    }
    _recurseGetPermission(menus);
    return permissions;
}

export function menuMapLeafKeys(menus: any[]){
    const leafs: any[] = [];
    const _recurseGetLeaf = (menus: any[]) => {
        menus.forEach((menu) => {
            if (!menu.children) {
                leafs.push(menu);
            } else {
                _recurseGetLeaf(menu.children??[]);
            }
        });
    }
    _recurseGetLeaf(menus);
    return leafs;
}

export {
    firstMenu
}
