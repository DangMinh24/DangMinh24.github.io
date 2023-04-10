<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>

    <div class="container-fluid">
      <h1>Experience History</h1>
      <ul class="list" style="list-style-type: disc">
        <li>
          Research Assistant + Robotic Programmer at National Institute for
          Aviation Research (NIAR), Wichita, Kansas.
        </li>
        <li>
          Undegraduate Research Assistant at Intelligent Robotic Lab at Wichita
          State University, Wichita Kansas.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "Experience",
  components: {
    Navigation,
  },
};
</script>

<style></style>
