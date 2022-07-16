import SxRequest from "@/services/index";///////////
import {IAccount, IDataType, ILoginResult} from "@/services/login/types";

enum LoginAPI {
    accountLogin = "/login",
    userInfo = "/users/",
    userMnus = "/role/",
}

export function accountLoginRequest(account: IAccount) {
  return SxRequest.post<IDataType<ILoginResult>>({
    url: LoginAPI.accountLogin,
    data: account,
  });
}

export function getUserInfoById(userId: number) {
    return SxRequest.get<IDataType>({
        url:  LoginAPI.userInfo + userId,
    });
}

export function getUserMnusById(userId: number) {
    return SxRequest.get<IDataType>({
        url:  LoginAPI.userMnus + userId + "/menu",
    });
}