
class localCache {
    set(key:string, value:any) {
        localStorage.setItem(key, JSON.stringify(value));
    }
    get(key:string) {
        if(localStorage.getItem(key)!==null) {
            // @ts-ignore
            return JSON.parse(localStorage.getItem(key));//JSON.parse()将字符串转换为对象
        }
    }
    remove(key:string) {
        localStorage.removeItem(key);
    }

}

export default new localCache();