<template>
  <div class="container">
    <h1 class="text-center">Publications</h1>
    <ul>
      <PublicationEvent />
    </ul>
  </div>
</template>

<script>
import PublicationEvent from "./PublicationEvent.vue";

export default {
  name: "PublicationSection",
  components: {
    PublicationEvent,
  },
};
</script>

<style>
</style>