<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>

    <div id="Content">
      <h1>Experience History</h1>
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
