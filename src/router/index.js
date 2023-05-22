/** @format */

import Vue from "vue";
import VueRouter from "vue-router";
import VueMeta from "vue-meta";

// import store from "../store";
Vue.use(VueRouter);
Vue.use(VueMeta);

const routes = [
	{
		path: "/",
		name: "Home",
		component: () => import(/* webpackChunkName: "home" */ "../views/Homepage"),
		metaInfo: {
			title: "Default App Title",
			titleTemplate: "%s | vue-meta Example App",
			htmlAttrs: {
				lang: "en-US",
			},
			meta: [
				{ charset: "utf-8" },
				{
					name: "description",
					content: "An example Vue application with vue-meta.",
				},
				{ name: "viewport", content: "width=device-width, initial-scale=1" },
			],
		},
	},
];

const router = new VueRouter({
	mode: "history",
	routes,
});

export default router;
