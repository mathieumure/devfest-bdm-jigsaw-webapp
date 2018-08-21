import Vue from "vue";
import Router from "vue-router";
import Character from "./views/Character.vue";
import Characters from "./views/Characters.vue";
import Infos from "./views/Infos.vue";
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/characters", component: Characters },
    { path: "/characters/:id", component: Character, props: true },
    { path: "/infos", component: Infos },
    { path: "*", redirect: "/characters" }
  ]
});
