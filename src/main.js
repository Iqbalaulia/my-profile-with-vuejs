/** @format */

import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/method";
import { BootstrapVue } from "bootstrap-vue";

/** Initial master component*/
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import locale from "element-ui/lib/locale/lang/en";
import AOS from "aos";

/* Global base css */
import "../src/assets/scss/base/index.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "aos/dist/aos.css";

Vue.use(ElementUI, { locale });
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
	render: (h) => h(App),
	router,
	store,
	mounted() {
		AOS.init();
	},
}).$mount("#app");
