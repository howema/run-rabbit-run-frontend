<template>
  <div class="experiences-show">
    <div class="container">
      <h1>{{ experience.title }}</h1>
      <p>{{ experience.subtasks }}</p>
      <p>{{ experience.notes }}</p>
      <!-- <p>{{ experience.image }}</p> -->
      <p></p>
      <router-link v-bind:to="`/experiences/${experience.id}/edit`"><button>Edit experience</button></router-link>
      <p></p>
      <router-link to="/experiences">Back to experiences</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      experience: {},
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      this.experience = response.data;
      console.log(response.data);
    });
  },
};
</script>
