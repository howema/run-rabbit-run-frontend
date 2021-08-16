<template>
  <div class="home">
    <h1>Run Rabbit Run</h1>
    <h2><i>Welcome -insert- to your homepage!</i></h2>
    <p>I know your fav thing is -insert- {{}}. Goods news is: this tastes like -insert-.</p>
    <div v-for="user in users" v-bind:key="user.id">
      {{ user.favorite_thing }}
    </div>
    <p></p>
    <router-link to="/experiences"><button>View All</button></router-link>
    <p></p>
    <router-link to="/tags"><button>View by Tag</button></router-link>
    <p></p>
    <router-link to="/experiences/new"><button>Add an Experience</button></router-link>
    <p></p>
    <router-link to="/bucket"><button>View Bucket</button></router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      image: {},
      users: [],
    };
  },
  created: function () {
    this.indexUsers();
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response.data);
        this.users = response.data;
        console.log(this.users);
      });
    },
  },
};
</script>
