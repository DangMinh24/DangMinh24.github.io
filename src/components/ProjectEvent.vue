<template>
  <div class="row">
    <div class="col-md-1"></div>
    <div class="col-md-2"></div>
    <div class="col-md-8">
      <div class="row">
        <div class="col-md-2">
          <img
            v-bind:src="require(`@/assets/projects/${file_name}`)"
            width="140px"
            height="112px"
          />
        </div>
        <div class="col-md-10 ">
          <h2>Project Title Here</h2>
          <p> Description here</p>
        </div>
      </div>
    </div>
    <div class="col-md-2">
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectEvent",
  props: {
    file_name: String,
  },
};
</script>

<style>
</style>