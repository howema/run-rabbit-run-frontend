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
      <div v-for="tag in experience_tags" v-bind:key="tag.id">{{ tag.name }}</div>
      <!-- <i>Tags: #{{ experience.tags[0]["name"] }}, #{{ experience.tags[1]["name"] }}</i> -->

      <!-- **This is displaying the names of tags!!! But doesn't work on every page..... -->
      <!-- <div> -->
      <div class="example">
        <form v-on:submit.prevent="createTag()">
          <!-- <h3 id="example-2">#2 - Multiselect with object options</h3> -->
          <div class="output">Tags: {{ tag_id }}</div>
          <!-- <Multiselect v-model="example2.value" v-bind="example2"></Multiselect> -->
          <Multiselect v-model="tag_id" mode="multiple" :options="options" />
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
      name: {},
      experience_tags: [],
      tags: [],
      checked: false,
      tag_id: null,
      options: { key: "value" },
      example2: {
        mode: "multiple",
        value: [],
      },
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      this.experience = response.data;
      this.experience_tags = response.data.tags;
      console.log(response.data);
    });
    // const data = await response.json();
  },
  mounted: function () {
    axios.get("/tags/").then((response) => {
      this.tags = response.data;
      console.log(response.data);
      // var tag1 = this.tags[0];
      // var tag2 = this.tags[1];
      // this.options[tag1.id] = "just an idea";
      // this.options[tag2.id] = "face your fears";
      console.log(this.options);
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
    createTag: function () {
      var params = { experience_id: `${this.$route.params.id}`, tag_id: this.tag_id };
      axios
        .post("/experience-tags", params)
        .then((response) => {
          console.log("experience tag created", response);
          // this.$router.push("/experiences");
        })
        .catch((error) => {
          console.log("experiences create error", error.response);
          this.errors = error.response.data.errors;
        });
      // var data = options.json();
      // data.results.map((item) => {
      //   return { value: item.js, label: item.js };
      // });
      // axios.post("experience-tags", this.);
    },
    //      return data.results.map((item) => {
    //     return { value: item.js, label: item.js }
    //   })
    // }
  },
};
</script>
