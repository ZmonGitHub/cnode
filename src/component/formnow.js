import dayjs from "dayjs";
require("dayjs/locale/zh-cn");
const relativeTime = require("dayjs/plugin/relativeTime");
dayjs.extend(relativeTime);
dayjs.locale("zh-cn");

export default function FormNow (date) {
  return dayjs(date).fromNow();
}
