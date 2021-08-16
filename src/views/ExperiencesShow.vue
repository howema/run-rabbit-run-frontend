<template>
  <div class="experiences-show">
    <div class="container">
      <h1>{{ experience.title }}</h1>
      <img v-bind:src="experience.image" />
      <p>Subtasks: {{ experience.subtasks }}</p>
      <p>Notes: {{ experience.notes }}</p>
      <p></p>
      <router-link v-bind:to="`/experiences/${experience.id}/edit`"><button>Edit experience</button></router-link>
      <p></p>
      <div>
        <form v-on:submit.prevent="addTag()">
          <Multiselect
            v-model="value"
            mode="multiple"
            :options="{
              just_an_idea: 'Just An Idea',
              face_your_fears: 'Face Your Fears',
              life_milestones: 'Life Milestones',
              travel: 'Travel',
              especially_weird: 'Especially Weird',
              nothing_to_it: 'Nothing To It',
            }"
          />
          <input type="submit" value="Add Tags" />
        </form>
      </div>
      <p></p>
      <router-link to="/experiences">Back to experiences</router-link>
    </div>
    <div v-if="experience.complete == false">
      <form v-on:submit.prevent="updateCheckbox()">
        <div id="v-model-checkbox" class="completed">
          <input type="checkbox" id="checkbox" v-model="checked" />
          <label for="checkbox">{{ "Complete?" }}</label>
          <p></p>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
</template>
<!--
<style>
.completed {
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}
</style>
-->
<style src="@vueform/multiselect/themes/default.css"></style>

<script>
import axios from "axios";
import Multiselect from "@vueform/multiselect/dist/multiselect.vue2.js";
export default {
  components: {
    Multiselect,
  },
  data: function () {
    return {
      errors: [],
      experience: {},
      experience_tag: {},
      tag: {},
      checked: false,
      value: null,
      options: [],
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
  methods: {
    updateCheckbox: function () {
      var params = { complete: true };
      axios.patch(`/experiences/${this.$route.params.id}`, params).then((response) => {
        console.log(response.data);
        this.$router.push("/bucket");
      });
    },
    addTag: function () {
      // var data = options.json();
      // data.results.map((item) => {
      //   return { value: item.js, label: item.js };
      // });
      // axios.post("experience-tags", this.);
    },
  },
};
</script>
