<template>
  <div class="bucket-index">
    <h1>
      Welcome to your Bucket.
      <p></p>
      <i>Make sure it's full.</i>
    </h1>

    <div v-for="experience in experiences" v-bind:key="experience.id">
      <div v-if="experience.complete == true">
        <h2>{{ experience.title }}</h2>
        <p></p>
        <img v-bind:src="experience.image" />
      <p><i>You did it!</i></p>
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
      experience: {},
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
