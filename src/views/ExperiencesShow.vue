<template>
  <div class="experiences-show">
    <div class="container">
      <h1>{{ experience.title }}</h1>
      <img v-bind:src="experience.image" />
      <p>Subtasks: {{ experience.subtasks }}</p>
      <p>Notes: {{ experience.notes }}</p>
      <!-- <p>Tags: {{ experience_tag.tag_id }}</p> -->
      <!-- <p>Tags: {{ tag.name }}</p>
      <p>Tags: {{ experience.tag }}</p>
      <p>Tags: {{ experience.tags }}</p> -->

      <!-- <p>{{ experience.image }}</p> -->
      <p></p>
      <router-link v-bind:to="`/experiences/${experience.id}/edit`"><button>Edit experience</button></router-link>
      <p></p>
      <router-link to="/experiences">Back to experiences</router-link>
    </div>
    <div id="v-model-checkbox" class="completed">
      <input type="checkbox" id="checkbox" v-model="checked" />
      <label for="checkbox">{{ "Complete?" }}</label>
      <p></p>
      <input type="submit" value="Submit" />
    </div>
  </div>
</template>

<style>
.completed {
  /* font-family: sans-serif; */
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      experience: {},
      experience_tag: {},
      tag: {},
      checked: false,
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
