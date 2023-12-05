<template>
  <div class="container">
    <h1 class="text-center">Experience</h1>
    <experience-event
      timeline="April 2023"
      description="I work on machine learning, Natural Language Processing, and ROS development."
      job_title="Researcher Assistant"
      company_name="Robotic Intelligence Lab (RIL)"
      company_location=" Wichita, KS"
      filename="wsu.png"
    />
    <!-- icon_path="../assets/wsu.png" -->
    <!-- <experience-event
      timeline="January 2023"
      description="I work as robotic engineering in NIAR."
    /> -->
  </div>
</template>

<script>
import ExperienceEvent from "./ExperienceEvent.vue";
export default {
  name: "ExperienceSection",
  components: {
    ExperienceEvent,
  },
};
</script>

<style>
</style>