<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div class="container-fluid">
      <navigation></navigation>
      <div class="container">
        <div class="row align-items-start">
          <div class="col-lg-4">
            <div class="text-center">
              <img
                class="rounded-circle"
                v-bind:src="avatar"
                alt="Mars Rover in Gazebo - One of Dang's personal project"
                width="270"
                height="270"
              />
              <Test />
              <!-- Add Contact block under image -->
              <!-- Add Research links Contact under image  
              ORCID
              IEEE ID
              ResearchGate ID
              ROS-Answer ID
              WSU Robotic Lab ID
          -->
              <!-- Add link Hongsheng He -->
            </div>
          </div>
          <div class="col-lg-8">
            <span class="home-title">Hi! My name is {{ name }}</span>
            <p>
              I am currently a Ph.D candidate at Wichita State Univeristy, under
              supervision of Dr. Hongsheng He. My dissertation focused on applying
              Natural Language Interface (NL) on robotic system. I have hands-on
              experience with various robot platforms, sensors, simulators.
            </p>
            <p>
              I am currently a Graduate Research Assistant at Robot Intelligence
              Lab (RIL) at Wichita State Univeristy, developing various robotic
              projects, particularly using ROS framework and simulation.
            </p>
            <p>
              I have participated in varous projects, in both academic and
              industrial environments. Some robotic models that I have experienced
              with:
            <ol>
              <li>Sawyer</li>
              <li>Husky</li>
              <li>FANUC LRMate 200iD/7L</li>
            </ol>
            </p>
          </div>
        </div>
      </div>

    </div>
    <ExperienceSection />
    <ProjectSection />

  </div>
</template>

<script>
import info from "../../info";
import { Drag, Drop } from "vue-drag-drop";
import Test from "./Test.vue";
import ExperienceSection from "./ExperienceSection.vue";
import ProjectSection from "./ProjectSection.vue";
// import OhVueIcon from "oh-vue-icons";

import Navigation from "./Navigation.vue";

export default {
  name: "Home",
  components: {
    Navigation,
    Test,
    ExperienceSection,
    ProjectSection,
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
      name: "Dang Tran",
      // linkedin: info.links.linkedin,
      // github: info.links.github,
      // angellist: info.links.angellist,
      // resume: info.links.resume,

      // avatar_: "../assets/sample_potrait.png",
      avatar: require("../assets/sample_potrait.png"),
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
