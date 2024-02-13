import Vue from "vue";


import Layout from "@/views/Layout"

import ComponentDescribe from "@/components/home/describe"
import ComponentMe from "@/components/home/me"
import ComponentExperience from "@/components/home/experiences"
import ComponentRecomendation from "@/components/home/recomendation"
import ComponentMyProject from "@/components/home/project"


Vue.component("layout", Layout)
Vue.component("component-describe", ComponentDescribe)
Vue.component("component-me", ComponentMe)
Vue.component("component-experience", ComponentExperience)
Vue.component("component-recomendation", ComponentRecomendation)
Vue.component("component-my-project", ComponentMyProject)
