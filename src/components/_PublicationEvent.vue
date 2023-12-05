<template>
  <li>
    <p>"{{title}}", by {{authors}} {{notes}}</p>
  </li>
</template>

<script>
export default {
  name: "PublicationEvent",
  data() {
    return {
      title:
        "A framework of controlled robot language for reliable human-robot collaboration",
      authors:
        "Tran Dang, Fujian Yan, Yimesker Yihun, Jindong Tan, and Hongsheng He",
      notes:
        "In Social Robotics: 13th International Conference, ICSR 2021, Singapore, Singapore, November 10–13, 2021, Proceedings 13, pp. 339-349. Springer International Publishing, 2021.",
    };
  },
};
</script>

<style>
</style>