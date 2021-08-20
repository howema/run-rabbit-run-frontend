<template>
  <div class="experiences-new">
    <h1>Add a New Experience</h1>
    <form v-on:submit.prevent="createExperience()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="newExperienceParams.title" />
      </div>
      <div>
        <label>Notes:</label>
        <input type="text" v-model="newExperienceParams.notes" />
      </div>
      <p></p>
      <div>
        <label>Tall Task 1:</label>
        <input type="text" v-model="newExperienceParams.task1" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task1a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task1b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task1c" />
      </div>
      <p></p>
      <p></p>
      <div>
        <label>Tall Task 2:</label>
        <input type="text" v-model="newExperienceParams.task2" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task2a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task2b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task2c" />
      </div>
      <p></p>
      <p></p>
      <div>
        <label>Tall Task 3:</label>
        <input type="text" v-model="newExperienceParams.task3" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task3a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task3b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="newExperienceParams.task3c" />
      </div>
      <p></p>

      <div>
        <label>Image:</label>
        <input type="text" v-model="newExperienceParams.image" />
      </div>
      <div>
        <label>Timeline:</label>
        <input type="text" v-model="newExperienceParams.timeline" />
      </div>
      <div>
        <label>Travel type:</label>
        <input type="text" v-model="newExperienceParams.travel_type" />
      </div>
      <div>
        <label>Budget:</label>
        <input type="text" v-model="newExperienceParams.budget" />
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
