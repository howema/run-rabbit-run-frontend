<template>
  <div class="experiences-show">
    <div class="container">
      <h1>{{ experience.title }}</h1>
      <img v-bind:src="experience.image" />

      <b><u>Task 1:</u></b>
      {{ experience.task1 }}

      <ol>
        <b>Teeny tasks:</b>
        <li>
          {{ experience.task1a }}
        </li>
        <li>
          {{ experience.task1b }}
        </li>
        <li>
          {{ experience.task1c }}
        </li>
      </ol>

      <b><u>Task 2:</u></b>
      {{ experience.task2 }}

      <ol>
        <b>Teeny tasks:</b>
        <li>
          {{ experience.task2a }}
        </li>
        <li>
          {{ experience.task2b }}
        </li>
        <li>
          {{ experience.task2c }}
        </li>
      </ol>
      <b><u>Task 3:</u></b>
      {{ experience.task3 }}

      <ol>
        <b>Teeny tasks:</b>
        <li>
          {{ experience.task3a }}
        </li>
        <li>
          {{ experience.task3b }}
        </li>
        <li>
          {{ experience.task3c }}
        </li>
      </ol>

      <p></p>

      <p>
        <b>Timeline:</b>
        {{ experience.timeline }}
      </p>
      <p>
        <b>Travel type:</b>
        {{ experience.travel_type }}
      </p>
      <p>
        <b>Budget:</b>
        {{ experience.budget }}
      </p>
      <p>
        <b>Notes:</b>
        {{ experience.notes }}
      </p>
      <p>
        <i><b>Tags:</b></i>
      </p>
      <div v-for="tag in experience_tags" v-bind:key="tag.id">
        <i>{{ tag.name }}</i>
      </div>
      <p></p>
      <router-link v-bind:to="`/experiences/${experience.id}/edit`"><button>Edit Experience</button></router-link>
      <p></p>
      <p></p>
      <p></p>
      <div class="example">
        <form v-on:submit.prevent="createTag()">
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
      <p></p>
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
    <router-link to="/experiences">Back to experiences</router-link>
  </div>
</template>
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
      var params = { experience_id: `${this.$route.params.id}` };
      if (this.value.length > 0) {
        var newArray = this.value.map((item) => item.id);
        newArray.forEach((item) => {
          params["tag_id"] = item;
          axios
            .post("/experience-tags", params)
            .then((response) => {
              console.log("experience tag created", response);
            })
            .catch((error) => {
              console.log("experiences create error", error.response);
              this.errors = error.response.data.errors;
            });
        });
        this.$router.push("/experiences");
      }
    },
  },
};
</script>
