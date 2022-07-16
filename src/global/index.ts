import {App} from "vue";
import {registerProps} from "@/global/register-props"; // 导入vue
export function globalRegister(app: App) {
    app.use(registerProps);
}