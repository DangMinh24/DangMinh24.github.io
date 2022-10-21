<template>
  <!-- <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>
    <div
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
          </div>
        </div>  
      </div>
    </div>
  </div> -->
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>
    <div class="container-fluid">
      <h1 class="text-start">Research History</h1>
      <p class="text-start">
        Interest in Natural Language Processing, Machine Learning and Robotics.
      </p>
      <p>
        Start with Natural Language Processing. But eventually find interest in
        Natural Language Processing and Robotics
      </p>
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
