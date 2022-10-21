<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-1">
          <img src="" alt="" />
        </div>
        <div class="col-lg-11">
          <div class="row">
            <!-- {{ this.$store.state.name }}
              {{ this.$store.state.lastname }} -->
            <span class="home-title">Hi! My name is __ __</span>
          </div>
          <div class="row">
            <p>
              (Still in development) I am a senior Computer Science
              undergraduate student and upcomming Ph.D candidate at Wichita
              State Univeristy. I have a strong passion and experience for
              Robotics, Natural Language Processing, Artificial Intelligence and
              Machine Learning. I am currently a researching assistant at Robot
              Intelligence Lab (RIL) at Wichita State Univeristy, and
              fortunately to be advised by Prof. Hongsheng He. <br /><br />I
              have worked in varous projects, in both academic and industrial
              environments.
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- <div
      class="container"
      data-aos="fade"
      data-aos-once="true"
      data-aos-duration="1000"
    >
      <div class="row align-items-center">
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 text-center">
          <img :src="picture" />
        </div>
        <div class="col-xl-6 col-bg-6 col-md-6 col-sm-12 pt-5">
          <span
            class="home-title"
            :class="{ pgray: !nightMode, 'text-light': nightMode }"
            >Hi! My name is Dang Tran</span
          >
          <div>
            <p v-html="description"></p>
          </div>
          <div class="text-center pb-4">
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('linkedin')"
              v-tooltip.bottom="'LinkedIn'"
            >
              <i class="fab fa-linkedin"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('github')"
              v-tooltip.bottom="'GitHub'"
            >
              <i class="fab fa-github"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('angellist')"
              v-tooltip.bottom="'AngelList'"
            >
              <i class="fab fa-angellist"></i>
            </button>
            <button
              class="btn btn-outline-secondary mx-2"
              @click="open('resume')"
              v-tooltip.bottom="'Resume'"
            >
              <i class="fa fa-file"></i>
            </button>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import info from "../../info";
import { Drag, Drop } from "vue-drag-drop";
// import Wave from "./helpers/Wave";

import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
    Drag,
    Drop,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      picture: info.flat_picture,
      description: info.description,
      name: info.name,
      linkedin: info.links.linkedin,
      github: info.links.github,
      // angellist: info.links.angellist,
      resume: info.links.resume,
    };
  },
  // methods: {
  //   open(link) {
  //     switch (link) {
  //       case "linkedin":
  //         window.open(this.linkedin, "_blank");
  //         break;
  //       case "github":
  //         window.open(this.github, "_blank");
  //         break;
  //       case "angellist":
  //         window.open(this.angellist, "_blank");
  //         break;
  //       case "resume":
  //         window.open(this.resume, "_blank");
  //         break;
  //     }
  //   },
  // },
};
</script>

<style scoped>
.home-title {
  font-size: 28px;
  font-weight: 500;
}
img {
  max-width: 300px;
  margin-top: 60px;
  transform: rotateY(180deg);
}
@media only screen and (max-width: 580px) {
  img {
    object-fit: cover;
    border-radius: 50%;
    height: 200px;
    width: 200px;
    margin-top: 10px;
    margin-bottom: 10px;
    border: 2px solid rgb(205, 205, 205);
  }
}
.fa {
  font-size: 15px;
}
.btn {
  border-color: #669db3ff;
  color: #669db3ff;
}
.btn:hover {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}
.btn:focus {
  background-color: #669db3ff;
  border-color: #669db3ff;
  color: white;
}
.btn:focus {
  outline: none !important;
}
p {
  text-align: justify;
  font-weight: 400;
}
/* LEAVES */
</style>
