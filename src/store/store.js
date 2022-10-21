import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export const store = new Vuex.Store({
  state: {
    name: "Dang",
    lastname: "Tran",
    schools: [
      {
        name: "Wichita State University",
        level: "Bachelor",
        major: "Computer Science",
        place: "USA",
        gpa: "3.5/4.0",
      },
      {
        name: "Wichita State University",
        level: "Ph.D",
        major: "Computer Science",
        place: "USA",
      },
    ],
    experiences: [
      {
        name: "Research Assistant for Robotic Intelligence Lab",
        place: "Wichita State University",
        duration: "3 years",
      },
    ],
    description: "",
  },
});
