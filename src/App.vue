<template>
  <div id="app">
    <div id="nav">
      <ul>
        <router-link to="/welcome">Welcome</router-link>
      </ul>
      <!-- <ul v-if="isLoggedIn()"> -->
      <ul>
        <router-link to="/">Home</router-link>
      </ul>
      <!-- <ul v-if="!isLoggedIn()"> -->
      <ul>
        <a class="nav-link" href="/signup">Sign-up</a>
      </ul>
      <!-- <ul v-if="!isLoggedIn()"> -->
      <ul>
        <a class="nav-link" href="/login">Login</a>
      </ul>
      <!-- <ul v-if="isLoggedIn()"> -->
      <ul>
        <a class="nav-link" href="/experiences">Experiences</a>
      </ul>
      <!-- <ul v-if="isLoggedIn()"> -->
      <ul>
        <a class="nav-link" href="/tags">Tags</a>
      </ul>
      <!-- <ul v-if="isLoggedIn()"> -->
      <ul>
        <a class="nav-link" href="/logout">Logout</a>
      </ul>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
