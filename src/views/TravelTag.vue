<template>
  <div class="travel-tag">
    <div class="container">
      <h1>All Experiences tagged with TRAVEL</h1>
      <div v-for="experience in experiences" v-bind:key="experience.id">
        -->
        <!-- <p>Tags1: {{ tag.name }}</p> -->
        <p>Tags2: {{ experiences.tag }}</p>
        <p>Tags3: {{ experience.tags }}</p>
      </div>
      <p></p>
      <p></p>
      <router-link to="/tags">Back to Tags</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      experiences: [],
      experience: {},
      experience_tag: {},
      tag: {},
    };
  },
  created: function () {
    // axios.get("/experiences/" + this.$route.params.id).then((response) => {
    //   this.experience = response.data;
    //   console.log(response.data);
    // });
    axios.get("/tags/4" + this.$route.params.id).then((response) => {
      this.tag = response.data;
      console.log(response.data);
    });
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
