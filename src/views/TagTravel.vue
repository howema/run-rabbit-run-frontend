<template>
  <div class="travel-tag">
    <div class="container">
      <h1><i>#Travel</i></h1>
      <div v-for="experience in experiences" v-bind:key="experience.id">
        <div v-if="experience.complete == false">
          <div>
            <h2>{{ experience.title }}</h2>
            <img v-bind:src="experience.image" />
            <p></p>
            <router-link v-bind:to="`/experiences/${experience.id}`">
              <small><button type="button" class="btn btn-info">More Info</button></small>
            </router-link>
          </div>
        </div>
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
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/tags/4" + this.$route.params.id).then((response) => {
        this.tag = response.data;
        let experiences = response.data.experiences;
        console.log(response.data.experiences);
        experiences.map((experience) => {
          if (experience.user_id == this.current_user_id) {
            this.experiences.push(experience);
          }
        });
        console.log(this.experiences);
      });
    },
  },
};
</script>
