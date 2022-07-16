import {useStore} from "vuex";


export function usePermission (pageName: string,handlerName: string){
    const store = useStore();
    const {menus,permissions} = store.state.login;
    const verifyPermission = `system:${pageName}:${handlerName}`;
    // const hasPermission = permissions.includes(verifyPermission);
    // const hasPermission = permissions.some(item => item === verifyPermission);
    const hasPermission =!!permissions.find((item:string) => item === verifyPermission);
    return hasPermission;
}
