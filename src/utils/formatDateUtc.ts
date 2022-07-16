import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

export function formatDateUtc(date: string, formatTemplate: string = "YYYY-MM-DD HH:mm:ss") {
    return dayjs.utc(date).utcOffset(8).format(formatTemplate)

}