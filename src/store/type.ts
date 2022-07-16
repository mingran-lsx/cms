import {ILoginState} from "@/store/login/type";

export interface IRootState {
    name: string;
    age: string;
    entireDepartments: any[];
    entireRoles: any[];
    entireMenus: any[];
}

export interface IRootWithModelState extends IRootState {
    login: ILoginState;
}