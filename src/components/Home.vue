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
    <div class="container-fluid">
      <h2>Research Interests</h2>
      <p>
        I found interests in solving "Terry Winograd" problem -- making a Robot
        System can understand human language.
      </p>
    </div>
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
      // resume: info.links.resume,
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
