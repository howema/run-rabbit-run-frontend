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
      <div class="example">
        <form v-on:submit.prevent="createTag()">
          <div class="output">Tags: {{ tag_id }}</div>

          <multiselect
            v-model="value"
            :options="options"
            :multiple="true"
            :close-on-select="false"
            :clear-on-select="false"
            :preserve-search="true"
            placeholder="Choose tags"
            label="name"
            track-by="name"
            :preselect-first="true"
          >
            <template slot="selection" slot-scope="{ values, search, isOpen }">
              <span class="multiselect__single" v-if="values.length &amp;&amp; !isOpen">
                {{ values.length }} options selected
              </span>
            </template>
          </multiselect>
          <input type="submit" value="Add Tags" />
        </form>
      </div>
      <p></p>
      {{ value }}
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
    <button v-on:click="strikeThrough()">Try it</button>
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<script>
import axios from "axios";
import Multiselect from "vue-multiselect";
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
      tag_id: [],
      value: [],
      options: [],
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      this.experience = response.data;
      this.experience_tags = response.data.tags;
      console.log(response.data);
    });
    this.getTags();
  },
  methods: {
    getTags: function () {
      axios.get("/tags/").then((response) => {
        response.data.forEach((item) => {
          console.log(item);
          var object = {};
          object["name"] = item.name;
          object["id"] = item.id;
          this.options.push(object);
        });
        this.tags = response.data;
        console.log(response.data);
        console.log(this.options);
      });
    },
    updateCheckbox: function () {
      var params = { complete: true };
      axios.patch(`/experiences/${this.$route.params.id}`, params).then((response) => {
        console.log(response.data);
        this.$router.push("/bucket");
      });
    },
    createTag: function () {
      var params = { experience_id: `${this.$route.params.id}`, tag_id: this.value.tag_id };
      this.value.forEach((item) => {
        this.item;
        axios
          .post("/experience-tags", params)
          .then((response) => {
            console.log("experience tag created", response);
          })
          .catch((error) => {
            console.log("experiences create error", error.response);
            this.errors = error.response.data.errors;
          });
        this.value.id.push(item);
      });
      // this.$router.push("/experiences");
    },
    // strikeThrough: function (text) {
    //   return text
    //     .split("")
    //     .map((char) => char + "\u0336")
    //     .join("");
    // },
  },
};
</script>
