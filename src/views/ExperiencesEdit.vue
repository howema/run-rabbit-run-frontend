<template>
  <div class="experiences-edit">
    <form v-on:submit.prevent="updateExperience()">
      <h1>Edit Experience</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="currentExperienceParams.title" />
      </div>
      <div>
        <label>Subtasks:</label>
        <input type="text" v-model="currentExperienceParams.subtasks" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="currentExperienceParams.notes" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="currentExperienceParams.image" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <!-- <input type="checkbox" id="tag1" value="Just An Idea" v-model="checkedTags">
    <label for="tag1">Just An Idea</label> -->
    <!-- <p></p>
    <button v-on:click="movesToBucket()">Completed? Move it into your bucket!</button>
    <p></p> -->
    <router-link v-bind:to="`/experiences/${experience.id}/experience-tags-new`">
      <button>Add a tag</button>
    </router-link>
    <button v-on:click="destroyExperience()">Delete</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentExperienceParams: {},
      errors: [],
      experience: {},
      // checkedTags: [],
    };
  },
  created: function () {
    axios.get(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log("experience info:", response.data);
      this.currentExperienceParams = response.data;
    });
  },
  methods: {
    destroyExperience: function () {
      axios.delete(`/experiences/${this.$route.params.id}`).then((response) => {
        console.log("experience destroyed", response.data);
        this.$router.push("/experiences");
      });
    },
    updateExperience: function () {
      axios.patch(`/experiences/${this.$route.params.id}`, this.currentExperienceParams).then((response) => {
        console.log(response.data);
        this.$router.push("/experiences");
      });
    },
  },
};
</script>
