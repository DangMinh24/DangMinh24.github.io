<template>
  <div
    :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }"
    class="pt-5 p-st"
  >
    <navigation></navigation>
    <div class="container-fluid">
      <h1>Blog History</h1>
    </div>
  </div>
</template>

<script>
import Navigation from "../components/Navigation.vue";
export default {
  name: "Blog",
  components: {
    Navigation,
  },
};
</script>

<style></style>
