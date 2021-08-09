<template>
  <div class="tags-index">
    <h1>All Tags</h1>
    <p></p>
    <router-link to="/just-an-idea"><button>Just An Idea</button></router-link>
    <router-link to="/face-your-fears"><button>Face Your Fears</button></router-link>
    <router-link to="/life-milestones"><button>Life Milestones</button></router-link>
    <div></div>
    <router-link to="/travel"><button>Travel</button></router-link>
    <router-link to="/especially-weird"><button>Especially Weird</button></router-link>
    <router-link to="/nothing-to-it"><button>Nothing To It</button></router-link>

    <!-- <img v-bind:src="tag.image" /> -->
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
