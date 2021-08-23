<template>
  <div>
    <!-- ======= Contact Section ======= -->
    <section id="contact" class="contact">
      <div class="container">
        <div class="signup">
          <div class="section-title" data-aos="zoom-out">
            <h2>Signup</h2>
            <p>Join Us</p>
          </div>

          <div class="row mt-5">
            <!-- <div class="col-lg-4" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>A108 Adam Street, New York, NY 535022</p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@example.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+1 5589 55488 55s</p>
              </div>
            </div>
          </div> -->

            <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">
              <form v-on:submit.prevent="submit()" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="newUserParams.name"
                      name="name"
                      class="form-control"
                      id="name"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      v-model="newUserParams.email"
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
                    type="text"
                    v-model="newUserParams.favorite_thing"
                    class="form-control"
                    name="subject"
                    id="subject"
                    placeholder="Your Favorite Thing"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    v-model="newUserParams.password"
                    class="form-control"
                    name="password"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
                <div class="form-group mt-3">
                  <input
                    type="password"
                    v-model="newUserParams.password_confirmation"
                    class="form-control"
                    name="password-confirmation"
                    id="password-confirmation"
                    placeholder="Password Confirmation"
                    required
                  />
                </div>
                <div class="text-center"><button type="submit">Sign Up!</button></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Contact Section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      newUserParams: {},
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
