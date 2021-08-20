<template>
  <div class="experiences-new">
    <h1>Add a New Experience</h1>
    <form v-on:submit.prevent="createExperience()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="newExperienceParams.title" />
      </div>
      <div>
        <label>Task1:</label>
        <input type="text" v-model="newExperienceParams.task1" />
      </div>
      <div>
        <label>Task2:</label>
        <input type="text" v-model="newExperienceParams.task2" />
      </div>
      <div>
        <label>Task3:</label>
        <input type="text" v-model="newExperienceParams.task3" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="newExperienceParams.notes" />
      </div>
      <div>
        <label>Image:</label>
        <input type="text" v-model="newExperienceParams.image" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newExperienceParams: {},
      errors: [],
    };
  },
  created: function () {},
  methods: {
    createExperience: function () {
      axios
        .post("/experiences", this.newExperienceParams)
        .then((response) => {
          console.log("experiences create", response);
          this.$router.push("/experiences");
        })
        .catch((error) => {
          console.log("experiences create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
