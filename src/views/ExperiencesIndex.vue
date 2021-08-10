<template>
  <div class="experiences-index">
    <router-link to="/experiences/new"><button>Add an Experience</button></router-link>
    <p></p>
    <h1>All Experiences</h1>
    <div v-for="experience in experiences" v-bind:key="experience.id">
      <div v-if="experience.complete == false">
        <h2>{{ experience.title }}</h2>
        <p></p>
        <img v-bind:src="experience.image" />
        <p></p>
        <router-link v-bind:to="`/experiences/${experience.id}`">
          <small><button type="button" class="btn btn-info">More Info</button></small>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
img {
  max-width: 300px;
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
        console.log("experiences index", response.data);
        this.experiences = response.data;
        console.log(this.experiences);
      });
    },
  },
};
</script>
