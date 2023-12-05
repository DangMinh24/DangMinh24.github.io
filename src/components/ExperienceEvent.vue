<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-2">
      {{timeline}}
    </div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-1">
          <img
            v-bind:src="require(`@/assets/${filename}`)"
            width="56px"
            height="56px"
          >

        </div>
        <div class="col-md-11">
          <h5> {{job_title}}</h5>
          <h5> {{company_name}}</h5>
          <h5>{{company_location}}</h5>
        </div>
        {{description}}
      </div>

    </div>
    <div class="col-md-1"></div>
  </div>
</template>

<script>
export default {
  name: "ExperienceEvent",
  props: {
    timeline: String,
    description: String,
    job_title: String,
    company_name: String,
    company_location: String,
    filename: String,
  },
};
</script>

<style>
</style>