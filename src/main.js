import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/method";

/* Initial master style */
import { PaginationPlugin, DropdownPlugin, NavPlugin } from "bootstrap-vue";
Vue.use(DropdownPlugin);
Vue.use(PaginationPlugin);
Vue.use(NavPlugin);

/** Initial master component*/
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
Vue.use(ElementUI, { locale });

/* Global base css */
import "../src/assets/scss/base/index.scss";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
