import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "normalize.css";
import SxRequest from "./services/index";
import "@/assets/css/index.less"
import {setupStore} from "./store";
import {globalRegister} from "@/global";

const app = createApp(App);
setupStore();
app.use(globalRegister).use(store).use(router).mount("#app");

