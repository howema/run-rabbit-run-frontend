<template>
  <div class="experience-tags-new">
    <h1>Add a tag to your experience</h1>
    <form v-on:submit.prevent="createExperienceTag()">
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <p><i>Enter a '4' if you want to tag as "Travel"</i></p>
        <label>Tag ID:</label>
        <input type="text" v-model="newExperienceTagsParams" />
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
      newExperienceTagsParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log("experience info:", response.data);
    });
  },
  methods: {
    createExperienceTag: function () {
      var params = { tag_id: params };
      axios
        .post("/experience-tags", params)
        .then((response) => {
          console.log("experience tag created", response);
          this.$router.push(`/experiences/${this.$route.params.id}`);
        })
        .catch((error) => {
          console.log("experiences create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>