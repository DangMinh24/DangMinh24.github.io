import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { store } from "./store/store";

Vue.use(VueRouter);

import Home from "./components/Home.vue";
import Research from "./views/Research.vue";
import Education from "./views/Education.vue";
import Experience from "./views/Experience.vue";
import CV from "./views/CV.vue";
import Blog from "./views/Blog.vue";

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";

Vue.use(BootstrapVue);
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/research",
    name: "Research",
    component: Research,
  },
  {
    path: "/education",
    name: "Education",
    component: Education,
  },
  {
    path: "/experience",
    name: "experience",
    component: Experience,
  },
  {
    path: "/cv",
    name: "CV",
    component: CV,
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
  },
  {
    path: "/contact",
    name: "Contact",
    component: Blog,
  },
];

const router = new VueRouter({
  mode: "history",
  routes, // short for `routes: routes`
});

new Vue({
  render: (h) => h(App),
  router,
  store,
}).$mount("#app");
