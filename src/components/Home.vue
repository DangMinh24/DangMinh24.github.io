<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <div class="container">
      <!-- <navigation></navigation> -->

      <!-- !Profile -->
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-responsive"
              v-bind:src="avatar"
              alt="Mars Rover in Gazebo - One of Dang's personal project"
              width="270"
              height="270"
            />
          </div>

          <div class="col-md-9">
            <span class="home-title">Hi! My name is {{ name }}</span>
            <p>
              I am a Graduate student of Ph.D program at Wichita State Univeristy (WSU), Kansas, under
              supervision of Dr. Hongsheng He. I received my Bachelor of Computer Science in WSU (with Math minor).
            </p>
            <p>
              My dissertation focuses on Natural Language Processing (NLP) on robotic frameworks.
              More specifically, I'm interested in building NLP Pipelines that can make robot understand human commands
              and execute actions accordingly. I am interested and have experience in both knowledge-based system and
              data-driven solutions for these NLP Pipelines.
            </p>
            <p>
              I have various experiences on academic research and development of robotic platforms.
              I worked as Undergraduate and Graduate Research Assistant at Robot Intelligence
              Lab (RIL) at WSU, developing various robotic frameworks, developing deep-learning
              data-driven solutions.
              I am fluent in ROS, simulation and robotic control.
            </p>
            <p>
              Some robotic platforms that I fortunately have experienced with (physically):
            <ol>
              <li>Sawyer</li>
              <li>Husky</li>
              <li>FANUC LRMate</li>
            </ol>
            </p>
          </div>
        </div>

      </div>

      <!-- !Publications -->
      <div class="container">
        <h3>Publications</h3>
        <hr>
        <!-- !Publication -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/projects/network_diagram_5.drawio.png`)"
            />

          </div>
          <div class="col-md-9">
            <p> Dang Tran, Nate Ahlgren, Chris Depcik, and Hongsheng He (2023)</p>
            <b>Adaptive Active Fusion of Camera and Single-Point
              LiDAR for Depth Estimation</b>
            <p>ICSR2021</p>
          </div>
        </div>
        <br>

        <!-- !Publication -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/projects/publication_ICSR_2021.png`)"
            />
          </div>
          <div class="col-md-9">
            <p> Dang Tran, Fujian Yan, Yimesker Yihun, Jindong Tan, and Hongsheng He (2021)</p>
            <b>A Framework of Controlled Robot Language for
              Reliable Human-Robot Collaboration</b>
            <p>ICSR2021</p>
          </div>
        </div>
        <br>

        <!-- !Publication -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/projects/International Journal of Social Robotics 2020.png`)"
            />
          </div>
          <div class="col-md-9">
            <p> Fujian Yan, Dang Tran and Hongsheng He (2020)</p>
            <b>Robotic Understanding of Object Semantics by Referring to a Dictionary</b>
            <p>International Journal of Social Robotics 2020</p>
          </div>
        </div>
      </div>
    </div>
    <br>

    <!-- !Experiences -->
    <div class="container">
      <h3>Experiences</h3>
      <hr>

      <!-- !Experience  -->
      <div class="row">
        <div class="col-md-3">
          <p>
            Jul 2018 - Aug 2023
          </p>
        </div>
        <div class="col-md-9">
          <p>Research Assistant</p>
          <b> Robot Intelligence Laboratory (RIL), Wichita State University (WSU),
            Wichita, Kansas</b>
        </div>
      </div>
      <br>

      <!-- !Experience  -->
      <div class="row">
        <div class="col-md-3">
          <p>
            Nov 2021 - Dec 2022
          </p>
        </div>
        <div class="col-md-9">
          <p>Research Assistant in Robotics</p>
          <b> National Institute for Aviation Research (NIAR), Wichita,
            Kansas</b>
        </div>
      </div>
      <br>
    </div>
    <br>

    <!-- !Personal Projects -->
    <div class="container">
      <h3>Personal Projects</h3>
      <hr>
    </div>
    <!-- <PublicationSection /> -->
    <!-- <ExperienceSection />
    
    <PublicationSection /> -->
  </div>
</template>

<script>
import info from "../../info";
// import { Drag, Drop } from "vue-drag-drop";
// import Test from "./Test.vue";
// import ExperienceSection from "./ExperienceSection.vue";
// import ProjectSection from "./ProjectSection.vue";
// import PublicationSection from "./PublicationSection.vue";
// import ProjectEventVue from "./ProjectEvent.vue";

import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
    // Test,
    // ExperienceSection,
    // ProjectSection,
    // PublicationSection,
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
/* LEAVES */
</style>
