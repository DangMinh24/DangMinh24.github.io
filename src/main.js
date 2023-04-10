import App from "./App.vue";
import Home from "./components/Home.vue";
import Test from "./components/Test.vue";
import Research from "./views/Research.vue";
import Education from "./views/Education.vue";
import Experience from "./views/Experience.vue";
import CV from "./views/CV.vue";
import Blog from "./views/Blog.vue";
import Contact from "./views/Contact.vue";


import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

import BootstrapVue from "bootstrap-vue/dist/bootstrap-vue.esm";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/css/bootstrap.css";
Vue.use(BootstrapVue);

// import { OhVueIcon, addIcons} from 'oh-vue-icons'
// import { AiAcademiaSquare } from 'oh-vue-icons/icons/ai'
// addIcons(AiAcademiaSquare)
// Vue.component("v-icon", OhVueIcon);


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faHatWizard } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faHatWizard)
// Vue.component('font-awesome-icon', FontAwesomeIcon)

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
    component: Contact,
  },
  {
    path: "/test",
    name: "Test",
    component: Test,

  }
];

const router = new VueRouter({
  mode: "history",
  routes,
});


const app = new Vue({
  el: "#app",
  render: (h) => h(App),
  router,
  components: {
    App,
  },
});