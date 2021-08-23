<template>
  <div>
    <!-- ======= Create Section ======= -->
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
            <p>Update</p>
            <div class="row justify-content-lg-center">
              <div class="col-md-auto" data-aos="fade-left">
                <form v-on:submit.prevent="updateExperience()" method="post" role="form" class="php-email-form">
                  <div class="row">
                    <div class="form-group mt-3">
                      <input
                        type="text"
                        v-model="currentExperienceParams.title"
                        class="form-control"
                        name="title"
                        id="title"
                        placeholder="Title"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        v-model="currentExperienceParams.timeline"
                        name="timeline"
                        class="form-control"
                        id="timeline"
                        placeholder="Timeline"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="text"
                        v-model="currentExperienceParams.travel_type"
                        class="form-control"
                        name="travel-type"
                        id="travel-type"
                        placeholder="Travel Type"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group">
                      <input
                        type="text"
                        v-model="currentExperienceParams.budget"
                        name="budget"
                        class="form-control"
                        id="budget"
                        placeholder="Budget"
                        required
                      />
                    </div>
                    <div class="col-md-6 form-group mt-3 mt-md-0">
                      <input
                        type="text"
                        v-model="currentExperienceParams.image"
                        class="form-control"
                        name="image"
                        id="image"
                        placeholder="Image"
                        required
                      />
                    </div>
                    <p></p>
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task1"
                      class="form-control"
                      name="task1"
                      id="task1"
                      placeholder="First Milestone"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task1a"
                      name="task1a"
                      class="form-control"
                      id="task1a"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task1b"
                      name="task1b"
                      class="form-control"
                      id="task1b"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task1c"
                      name="task1c"
                      class="form-control"
                      id="task1c"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task2"
                      class="form-control"
                      name="task2"
                      id="task2"
                      placeholder="Second Milestone"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task2a"
                      name="task2a"
                      class="form-control"
                      id="task2a"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task2b"
                      name="task2b"
                      class="form-control"
                      id="task2b"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task2c"
                      name="task2c"
                      class="form-control"
                      id="task2c"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task3"
                      class="form-control"
                      name="task3"
                      id="task3"
                      placeholder="Third Milestone"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task3a"
                      name="task3a"
                      class="form-control"
                      id="task3a"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task3b"
                      name="task3b"
                      class="form-control"
                      id="task3b"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="col-md-6 form-group">
                    <input
                      type="text"
                      v-model="currentExperienceParams.task3c"
                      name="task3c"
                      class="form-control"
                      id="task3c"
                      placeholder="Subtask"
                      required
                    />
                  </div>
                  <div class="form-group mt-3">
                    <textarea
                      class="form-control"
                      v-model="currentExperienceParams.notes"
                      name="notes"
                      rows="5"
                      placeholder="Notes"
                      required
                    ></textarea>
                  </div>
                  <div class="text-center"><button type="submit">Submit Changes</button></div>
                </form>
                <button v-on:click="destroyExperience()">Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- </div> -->
    </section>
    <!-- End Create Section -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentExperienceParams: {},
      errors: [],
      experience: {},
    };
  },
  created: function () {
    axios.get(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log("experience info:", response.data);
      this.currentExperienceParams = response.data;
    });
  },
  methods: {
    destroyExperience: function () {
      axios.delete(`/experiences/${this.$route.params.id}`).then((response) => {
        console.log("experience destroyed", response.data);
        this.$router.push("/experiences");
      });
    },
    updateExperience: function () {
      axios.patch(`/experiences/${this.$route.params.id}`, this.currentExperienceParams).then((response) => {
        console.log(response.data);
        this.$router.push(`/experiences/${this.$route.params.id}`);
      });
    },
  },
};
</script>
