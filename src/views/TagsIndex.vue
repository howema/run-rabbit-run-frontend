<template>
  <div class="tags-index">
    <h1>All Tags</h1>
    <div v-for="tag in tags" v-bind:key="tag.id">
      <h2>{{ tag.name }}</h2>
      <!-- <p></p> -->
      <!-- <p>{{ tag.subtasks }}</p>
      <p>{{ tag.notes }}</p> -->
      <!-- <img v-bind:src="tag.image" /> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      tags: [],
    };
  },
  created: function () {
    this.indexTags();
  },
  methods: {
    indexTags: function () {
      axios.get("/tags").then((response) => {
        console.log("tags index", response);
        this.tags = response.data;
      });
    },
  },
};
</script>
