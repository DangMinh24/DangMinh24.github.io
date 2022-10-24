<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>
    <div class="container-fluid">
      <h1 class="text-start">Research History</h1>
      <h2>Publications</h2>
      <h4>Natural Language for Robotics</h4>
      <div class="container-fluid">
        <ul class="list" style="list-style-type: disc">
          <li>
            Tran, Dang, Fujian Yan, Yimesker Yihun, Jindong Tan, and Hongsheng
            He. "A Framework of Controlled Robot Language for Reliable
            Human-Robot Collaboration." In International Conference on Social
            Robotics, pp. 339-349. Springer, Cham, 2021.
          </li>
          <li>
            Yan, Fujian, Dang M. Tran, and Hongsheng He. "Robotic understanding
            of object semantics by referringto a dictionary." International
            Journal of Social Robotics 12, no. 6 (2020): 1251-1263.
          </li>
        </ul>
      </div>

      <h4>Perception for Robotics</h4>
      <div class="container-fluid">
        <ul class="list" style="list-style-type: disc">
          <li>
            Dang Tran, Ahlgren Nate, Chris Depcik, and Hongsheng He. "Adaptive
            Active Fusion of Visual and Single-Point LiDAR Sensors". In IEEE
            Transactions On Instrumentation And Measurement, (2022)
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";

export default {
  name: "Research",
  components: {
    Navigation,
  },
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
</style>
