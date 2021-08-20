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
        <label>Notes:</label>
        <input type="text" v-model="currentExperienceParams.notes" />
      </div>
      <p></p>
      <div>
        <label>Tall Task 1:</label>
        <input type="text" v-model="currentExperienceParams.task1" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task1a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task1b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task1c" />
      </div>
      <p></p>
      <p></p>
      <div>
        <label>Tall Task 2:</label>
        <input type="text" v-model="currentExperienceParams.task2" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task2a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task2b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task2c" />
      </div>
      <p></p>
      <p></p>
      <div>
        <label>Tall Task 3:</label>
        <input type="text" v-model="currentExperienceParams.task3" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task3a" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task3b" />
      </div>
      <div>
        <label>Teeny Task:</label>
        <input type="text" v-model="currentExperienceParams.task3c" />
      </div>
      <p></p>

      <div>
        <label>Image:</label>
        <input type="text" v-model="currentExperienceParams.image" />
      </div>
      <div>
        <label>Timeline:</label>
        <input type="text" v-model="currentExperienceParams.timeline" />
      </div>
      <div>
        <label>Travel type:</label>
        <input type="text" v-model="currentExperienceParams.travel_type" />
      </div>
      <div>
        <label>Budget:</label>
        <input type="text" v-model="currentExperienceParams.budget" />
      </div>
      <input type="submit" value="Submit" />
    </form>
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
