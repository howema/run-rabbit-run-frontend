<template>
  <div class="experiences-show">
    <div class="container">
      <h1>{{ experience.title }}</h1>
      <p>Subtasks: {{ experience.subtasks }}</p>
      <p>Notes: {{ experience.notes }}</p>
      <!-- <p>Tags: {{ experience_tag.tag_id }}</p> -->
      <p>Tags: {{ tag.name }}</p>
      <p>Tags: {{ experience.tag }}</p>
      <p>Tags: {{ experience.tags }}</p>

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
      experience_tag: {},
      tag: {},
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      this.experience = response.data;
      console.log(response.data);
    });
    axios.get("/tags/" + this.$route.params.id).then((response) => {
      this.tag = response.data;
      console.log(response.data);
    });
  },
};
</script>
