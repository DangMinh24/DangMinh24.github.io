<template>
  <div class="container-sm">
    <h1 class="text-center">Projects</h1>
    <ProjectEvent file_name="project_1.png" />
  </div>
</template>

<script>
import ProjectEvent from "./ProjectEvent.vue";
export default {
  name: "ProjectSection",
  components: {
    ProjectEvent,
  },
};
</script>

<style>
</style>