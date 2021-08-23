<template>
  <div>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="signup">
          <!-- <div class="section-title" data-aos="zoom-out"> -->
          <!-- <h2>Signup</h2>
          <p>Join Us</p> -->
        </div>

        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2></h2>
            <p>Login</p>
            <div class="row justify-content-lg-center">
              <div class="col-md-auto" data-aos="fade-left">
                <form v-on:submit.prevent="submit()" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="form-group mt-3">
                      <input
                        type="email"
                        v-model="newSessionParams.email"
                        class="form-control"
                        name="email"
                        id="email"
                        placeholder="Your Email"
                        required
                      />
                    </div>
                  </div>

                  <div class="form-group mt-3">
                    <input
                      type="password"
                      v-model="newSessionParams.password"
                      class="form-control"
                      name="password"
                      id="password"
                      placeholder="Password"
                      required
                    />
                  </div>

                  <div class="text-center"><button type="submit">Log In!</button></div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
