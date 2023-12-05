<template>
  <div class="row">
    <div class="col-md-3">
      <img
        class="img-fluid img-rounded"
        v-bind:src="require(`@/assets/projects/${file_name}`)"
        width="140px"
        height="112px"
      />
    </div>
    <div class="col-md-9">
      <p> Description here</p>
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