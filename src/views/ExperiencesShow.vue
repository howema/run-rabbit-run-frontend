<template>
  <div class="experiences-show">
    <!-- ======= Breadcrumbs ======= -->
    <section id="breadcrumbs" class="breadcrumbs">
      <div class="container">
        <div class="align-items-center">
          <h2></h2>
          <ol>
            <li><a href="/">Home</a></li>
            <li>Details</li>
          </ol>
        </div>
      </div>
    </section>
    <!-- End Breadcrumbs -->

    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
      <div class="container">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <section id="portfolio" class="portfolio">
              <div class="container">
                <h2>Details</h2>
                <p>{{ experience.title }}</p>
              </div>
            </section>
          </div>
        </div>
        <div class="row gy-4">
          <div class="col-lg-8">
            <div class="portfolio-details-slider">
              <div class="align-items-center">
                <img v-bind:src="experience.image" />
                <div class="swiper-slide"></div>
              </div>
              <!-- <div class="swiper-pagination"></div> -->
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>General</h3>
              <ul>
                <li>
                  <strong>Notes:</strong>
                  {{ experience.notes }}
                </li>
                <li>
                  <strong>Travel Type</strong>
                  : {{ experience.travel_type }}
                </li>
                <li>
                  <strong>Timeline</strong>
                  : {{ experience.timeline }}
                </li>
                <li>
                  <strong>Budget</strong>
                  : {{ experience.budget }}
                </li>

                <li>
                  <strong>Tags</strong>
                  :
                  <div class="tags">
                    <div v-for="tag in experience_tags" v-bind:key="tag.id">
                      <i>{{ tag.name }}</i>
                    </div>
                  </div>
                </li>
              </ul>
              <!-- ======= Solid Button Section ======= -->
              <section id="pricing" class="pricing">
                <!-- <div class="col-lg-3 col-md-6"> -->
                <div class="btn-wrap">
                  <router-link v-bind:to="`/experiences/${experience.id}/edit`" class="btn-buy">
                    Edit Details
                  </router-link>
                  <!-- <a href="/tags" class="btn-buy">Back to Tags</a> -->
                </div>
                <!-- </div> -->
              </section>

              <!-- End Solid Button Section -->
            </div>
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Stepping Stones</h3>
              <ul>
                <li>
                  <strong>Step 1:</strong>
                  {{ experience.task1 }}
                </li>
                <li>
                  <ol>
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
                </li>
                <li>
                  <strong>Step 2:</strong>
                  {{ experience.task2 }}
                </li>
                <li>
                  <ol>
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
                </li>
                <li>
                  <strong>Step 3:</strong>
                  {{ experience.task3 }}
                </li>
                <li>
                  <ol>
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
                </li>
              </ul>
            </div>
          </div>
          <div class="col-lg-4">
            <div class="portfolio-info">
              <h3>Add Tags</h3>
              <form v-on:submit.prevent="createTag()">
                <multiselect
                  v-model="value"
                  :options="options"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
                  placeholder="Select Tags For This Experience"
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
          </div>

          <div class="col-lg-4">
            <div class="portfolio-info">
              <div class="bucket-push">
                <div v-if="experience.complete == false">
                  <h3>Complete? Add it to Your Bucket!</h3>
                  <form v-on:submit.prevent="updateCheckbox()">
                    <div id="v-model-checkbox" class="completed">
                      <input type="checkbox" id="checkbox" v-model="checked" />
                      <label for="checkbox">Yeah!</label>
                      <p></p>
                      <input type="submit" value="Bucket!" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <!-- ======= Outline Button Section ======= -->
            <section id="about" class="about">
              <div class="container">
                <div class="row content" data-aos="fade-up">
                  <div class="btn-wrap">
                    <!-- <div class="col-lg-6 pt-4 pt-lg-0"> -->
                    <!-- <router-link v-bind:to="`/experiences/${experience.id}/edit`" class="btn-learn-more">
                      Edit Details
                    </router-link> -->

                    <a href="/experiences" class="btn-learn-more">Back to All</a>
                    <a href="/tags" class="btn-learn-more">Back to Tags</a>
                  </div>
                </div>
              </div>
              <!-- </div> -->
            </section>
            <!-- End Outline Button Section -->
          </div>
        </div>
      </div>
    </section>
    <!-- End Portfolio Details Section -->
    <div class="container">
      <!-- <router-link to="/experiences">Back to All</router-link> -->
    </div>
  </div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
.tags {
  /* display: inline-block; */
  display: table;
}
img {
  max-width: 300px;
}
</style>

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
      // console.log(response.data);
      console.log("ExperienceShow:", this.experience);
      console.log("ExperienceTags:", this.experience_tags);
    });
    this.getTags();
  },
  methods: {
    getTags: function () {
      axios.get("/tags/").then((response) => {
        response.data.forEach((item) => {
          // console.log("Tag:", item);
          var object = {};
          object["name"] = item.name;
          object["id"] = item.id;
          this.options.push(object);
        });
        this.tags = response.data;
        // console.log(response.data);
        console.log("Options:", this.options);
      });
    },
    updateCheckbox: function () {
      var params = { complete: true };
      axios.patch(`/experiences/${this.$route.params.id}`, params).then((response) => {
        console.log("Checkbox Updated:", response.data);
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
      }
      this.$router.push(`/experiences/${this.$route.params.id}`).catch(() => {});
      this.$router.go();
    },
  },
};
</script>
