import {App} from "vue";
import {formatDateUtc} from "@/utils/formatDateUtc";

export function registerProps(app: App) {
    app.config.globalProperties.$filter = {
        formatDate(date: string) {
            return formatDateUtc(date);
        }
    }
}