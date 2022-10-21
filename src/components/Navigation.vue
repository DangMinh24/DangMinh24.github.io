<template>
  <div>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <router-link
          to="/"
          class="nav-link"
          active-class="active"
          exact
          style="cursor: pointer"
          >Home</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/research"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >Research</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/education"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >Education</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/experience"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >Experience</router-link
        >
      </li>

      <li class="nav-item">
        <router-link
          to="/cv"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >CV</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/blog"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >Blog</router-link
        >
      </li>
      <li class="nav-item">
        <router-link
          to="/contact"
          class="nav-link"
          active-class="active"
          style="cursor: pointer"
          >Contact</router-link
        >
      </li>
    </ul>
    <hr />
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>
