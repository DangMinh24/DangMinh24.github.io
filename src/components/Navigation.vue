<template>
  <nav class="nav">
    <router-link
      to="/"
      class="nav-link"
      active-class="active"
      exact
      style="cursor: pointer"
    >Home</router-link>
    <router-link
      to="/research"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Research</router-link>
    <router-link
      to="/education"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Education</router-link>
    <router-link
      to="/experience"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Experience</router-link>
    <router-link
      to="/cv"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >CV</router-link>
    <router-link
      to="/blog"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Blog</router-link>
    <router-link
      to="/contact"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Contact</router-link>
    <router-link
      to="/test"
      class="nav-link"
      active-class="active"
      style="cursor: pointer"
    >Test</router-link>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
