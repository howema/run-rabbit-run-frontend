<template>
  <div class="experiences-index">
    <h1>All Experiences</h1>
    <div v-for="experience in experiences" v-bind:key="experience.id">
      <h2>{{ experience.title }}</h2>
      <p></p>
      <img v-bind:src="experience.image" />
      <p>Subtasks: {{ experience.subtasks }}</p>
      <p>Notes: {{ experience.notes }}</p>
      <router-link v-bind:to="`/experiences/${experience.id}`">
        <small><button type="button" class="btn btn-info">More Info</button></small>
      </router-link>
    </div>
  </div>
</template>

<style>
.image {
  width: 50%;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      image: {},
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/experiences").then((response) => {
        console.log("experiences index", response);
        this.experiences = response.data;
      });
    },
  },
};
</script>
