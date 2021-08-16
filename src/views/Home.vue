<template>
  <div class="home">
    <h1>Run Rabbit Run</h1>
    <h2>
      <i>Welcome {{ user.name }} to your homepage!</i>
    </h2>
    <p>
      Hello dear friend. I know your fav thing is {{ user.favorite_thing }}. Goods news! This app tastes like
      {{ user.favorite_thing }}.
    </p>

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
      user: [],
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.indexUsers();
    axios.get("/users/" + this.current_user_id).then((response) => {
      this.user = response.data;
      console.log(response.data.users);
    });
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
