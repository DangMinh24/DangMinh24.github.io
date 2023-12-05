<template>
  <div id="page">
    <div class="container">
      <nav
        id="navbar_container"
        class="navbar fixed-top navbar-expand-md"
      >
        <a
          class=navbar-brand
          href="#Profile"
        >
          Dang Tran
        </a>
        <div class="collapse navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Profile"
              >Home</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#News"
              >News</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Publications"
              >Publications</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Experiences"
              >Experiences</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Projects"
              >Projects</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
              >Blogs</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#Contact"
              >Contact</a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="https://github.com/DangMinh24"
              >Github</a>
              <!-- TODO: Add icon for the github instead -->
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="container">

      <!-- !Profile -->
      <div
        id="Profile"
        class="container"
      >
        <div class="row">
          <div
            id="profile_image"
            class="col-md-3"
          >
            <img
              class="img-fluid center"
              v-bind:src="avatar"
              alt="Mars Rover in Gazebo - One of Dang's personal project"
            />

            <div>
              <h2 class="mb-0 mt-0 text-center">Dang Tran</h2>
              <p class="mb-0 mt-0 text-center">Ph.D Student</p>
              <p class="mb-0 mt-0 text-center">Computer Science</p>
              <p class="mb-0 mt-0 text-center">University of Alabama</p>
              <p class="mb-0 mt-0 text-center">dmtran1@crimson.ua.edu</p>
              <p class="mb-0 mt-0 text-center">Contact: South Engineering Research Center 2023 (SERC2023) </p>
            </div>
          </div>

          <div class="col-md-9">
            <span class="home_title">Hi! My name is Dang Tran.</span>
            <p>
              I am a Graduate student of Ph.D program at the University of Alabama (UA), under
              supervision of <a v-bind:href="hongsheng_he_link">Dr. Hongsheng He</a>.
              I received my Bachelor of Computer Science (with Math minor) in Wichita State
              University, Kansas.
            </p>
            <p>
              My dissertation focuses on Natural Language Processing (NLP) on robotic frameworks.
              More specifically, I'm interested in building NLP Pipelines that can make robot understand human commands
              and execute actions accordingly. I am interested and have experience in both knowledge-based system and
              data-driven solutions for these NLP Pipelines.
            </p>
            <p>
              I have various experiences on academic research and development of robotic platforms.
              I am a Graduate Research Assistant in Robot Intelligence
              Lab (RIL) at the University of Alabama, developing various robotic frameworks, 
              developing deep-learning data-driven solutions.
              I am comfortable with machine-learning, AI and robot simulation + robot controls.
            </p>
            <p>
              Some robotic platforms that I fortunately have experienced with (physically):
            <ol>
              <li>Sawyer</li>
              <li>UR5e</li>
              <li>Husky</li>
              <li>FANUC LRMate</li>
              <li>Nao</li>
            </ol>
            </p>
          </div>
        </div>

      </div>

      <!-- !News -->
      <div class="container">
        <h3 id="News">News</h3>
        <hr>
        <!-- <div class="row">
          <div class="col-md-3">
            <p>
              <b>June 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Get admission in University of Alabama Graduate program!
            </p>
          </div>
        </div>
        <br> -->
        <div class="row">
          <div class="col-md-3">
            <p>
              <b>October 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Our Conference paper is accepted at International Conference Social Robotics 2023 (ICSR 2023).
            </p>
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col-md-3">
            <p>
              <b>September 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Our Conference paper is accepted at International Conference on Humanoid Robots 2023. 
            </p>
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col-md-3">
            <p>
              <b>August 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
                Getting accepted to a Ph.D program at University of Alabama. 
            </p>
          </div>
        </div>
        <br>


        <div class="row">
          <div class="col-md-3">
            <p>
              <b>May 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Our Journal paper is accepted at IEEE Transaction Instrument and Measurement (TIM) 2023.
            </p>
          </div>
        </div>
        <br>

        <!-- 
          <div class="row">
          <div class="col-md-3">
            <p>
              <b>January 2023</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Getting accepted to a Ph.D program at WSU.
            </p>
          </div>
        </div>
        <br> 
        -->

        <div class="row">
          <div class="col-md-3">
            <p>
              <b>December 2022</b>
            </p>
          </div>

          <div class="col-md-9">
            <p>
              Complete B.S program at WSU.
            </p>
          </div>
        </div>
      </div>
      <br>

      <!-- !Publications -->
      <div
        id="Publications"
        class="container"
      >
        <h3>Publications</h3>
        <hr>

        <!-- !Publication -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/projects/ICSR_2023.png`)"
            />

          </div>
          <div class="col-md-9">
            <p> <span id="author">Dang Tran</span>, Hui Li, and <a v-bind:href="hongsheng_he_link">Hongsheng He</a> (2023)</p>
            <b>AI Planning From Natural-Language Instructions for Trustworthy Human-Robot Communication</b>
            <p>ICSR 2023 (Doha)</p>
          </div>
        </div>
        <br>

        <!-- !Publication -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/projects/network_diagram_5.drawio.png`)"
            />

          </div>
          <div class="col-md-9">
            <p> <span id="author">Dang Tran</span>, Nate Ahlgren, Chris Depcik, and <a v-bind:href="hongsheng_he_link">Hongsheng He</a> (2023)</p>
            <b>Adaptive Active Fusion of Camera and Single-Point
              LiDAR for Depth Estimation</b>
            <p>IEEE TIM 2023</p>
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
            <p> <span id="author">Dang Tran</span>, <a v-bind:href="fujian_link">Fujian Yan</a>, Yimesker Yihun, Jindong Tan, and <a v-bind:href="hongsheng_he_link">Hongsheng He</a> (2021)</p>
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
            <p> <a v-bind:href="fujian_link">Fujian Yan</a>, <span id="author">Dang Tran</span> and <a v-bind:href="hongsheng_he_link">Hongsheng He</a> (2020)</p>
            <b>Robotic Understanding of Object Semantics by Referring to a Dictionary</b>
            <p>International Journal of Social Robotics 2020</p>
          </div>
        </div>
      </div>

      <br>

      <!-- !Experiences -->
      <div
        id="Experiences"
        class="container"
      >
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

      <!-- !Projects -->
      <div
        id="Projects"
        class="container"
      >
        <h3>Projects</h3>
        <hr>

        <!-- !Robotics Projects -->
        <h4>Robotics</h4>
        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_nlp_robot.png`)"
              alt=""
            >
          </div>
          <div class="col-md-9">
            <b> Integrate NLP framework to Robotic Controls</b>
          </div>
        </div>
        <br>

        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_CAD2Path.png`)"
              alt=""
            >
          </div>
          <div class="col-md-9">
            <b> Develop CAD2Path program with C++ & Roboguide (Fanuc LRMate)</b>
          </div>
        </div>
        <br>

        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_knowledge_based_planning.png`)"
              alt=""
            >
          </div>
          <div class="col-md-9">
            <b> Knowledge-based Planning for Robotic Controls</b>
          </div>
        </div>
        <br>

        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_mobile.png`)"
              alt=""
            >
          </div>
          <div class="col-md-9">
            <b> Control Mobile Robot (Voltage) with Finite-State-Machine </b>
          </div>
        </div>
        <br>

        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_pybullet.png`)"
              alt=""
            >
          </div>
          <div class="col-md-9">
            <b> Reinforcement Learning with OpenAI Gym and Pybullet</b>
          </div>
        </div>
        <br>

        <div class="row">
          <div class="col-md-3">

          </div>
          <div class="col-md-9">
            <b> Integrate Gym with Gazebo</b>
          </div>
        </div>
        <br>

        <!-- !NLP Projects -->
        <h4>NLP</h4>
        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <!-- <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_nlp_robot.png`)"
              alt=""
            > -->
          </div>
          <div class="col-md-9">
            <b> Develop various NLP Parsing Algorithms</b>
          </div>
        </div>
        <br>

        <!-- !Project -->
        <div class="row">
          <div class="col-md-3">
            <!-- <img
              class="img-fluid img-rounded"
              v-bind:src="require(`@/assets/personal_projects/project_nlp_robot.png`)"
              alt=""
            > -->
          </div>
          <div class="col-md-9">
            <b> Develop Planning Parser + Information Extraction</b>
          </div>
        </div>
      </div>
      <br>

      <div
        id="Contact"
        class="container"
      >
        <h3>Contact</h3>
        <hr>
        Robot Intelligence Laboratory
        <br>
        South Engineering Research Center
        <br>
        Shelby Ln
        <br>
        Tuscaloosa, AL, USA, 35401
        <br>
        dmtran1@crimson.ua.edu
      </div>
      <br>

      <!-- !Footer -->
      <div class="container">
        <hr>
        © Dang Tran 2023
        <br>
        <div class="row">

          <a
            class="text-right"
            href="https://clustrmaps.com/site/1burj"
            title="Visit tracker"
          ><img src="//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=nqSdGdWo5nS40pWlJuHEbV_ZUYx94S6A3saD0hvG1zM" /></a>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import info from "../../info";

import Navigation from "./Navigation.vue";
export default {
  name: "Home",
  components: {
    Navigation,
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
      avatar: require("../assets/sample_potrait.png"),

      fujian_link:
        "https://www.wichita.edu/profiles/academics/engineering/SoC/Yan-Fujian.php",
      hongsheng_he_link: "https://eng.ua.edu/eng-directory/dr-hongsheng-he/",
    };
  },
};
</script>

<style scoped>
#page {
  background-color: rgb(24, 26, 27);
  color: white;
}
#navbar_container {
  background-color: rgb(18, 44, 86);

  padding-left: 40px;
  padding-right: 10px;
}

.navbar-brand {
  color: white;
}

.nav-link {
  color: white;
}

.navbar-brand:hover {
  color: rgb(224, 231, 14);
}
.nav-link:hover {
  color: rgb(224, 231, 14);
}

.navbar-brand:focus {
  color: rgb(224, 231, 14);
}
.nav-link:focus {
  color: rgb(224, 231, 14);
}

#Profile {
  padding-top: 80px;
}

#profile_image {
  padding-top: 40px;
}

#brief_profile_description {
  text-align: center;
  line-height: 3px;
}

#author {
  background-color: rgb(225, 72, 16);
}

.home_title {
  font-size: 28px;
  font-weight: 500;
}
</style>
