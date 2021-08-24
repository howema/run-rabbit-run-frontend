<template>
  <div class="just-an-idea-tag">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h1><i>#JustAnIdea</i></h1>
          <div class="row">
            <div v-for="experience in experiences" v-bind:key="experience.id" class="col-3">
              <div class="portfolio-item filter-card">
                <div class="portfolio-img">
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Card 2"
                  ></a>
                  <router-link v-bind:to="`/experiences/${experience.id}`">
                    <div class="portfolio-img">
                      <img v-bind:src="experience.image" class="img-fluid" alt="" />
                    </div>
                    <h5>{{ experience.title }}</h5>
                  </router-link>
                </div>
              </div>
            </div>
            <!-- ======= Solid Button Section ======= -->
            <!-- <section id="pricing" class="pricing">
              <div class="col-lg-3 col-md-6">
                <div class="btn-wrap">
                  <a href="/tags" class="btn-buy">Back to Tags</a>
                </div>
              </div>
            </section> -->
            <!-- End Solid Button Section -->
            <!-- ======= Outline Button Section ======= -->
            <section id="about" class="about">
              <div class="container">
                <div class="row content" data-aos="fade-up">
                  <div class="move">
                    <div class="col-lg-6 pt-4 pt-lg-0">
                      <a href="/tags" class="btn-learn-more">Back to Tags</a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Outline Button Section -->
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
/* .move {
  float: right;
} */
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      experiences: [],
      experience: {},
      experience_tag: {},
      tag: {},
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/tags/1" + this.$route.params.id).then((response) => {
        this.tag = response.data;
        let experiences = response.data.experiences;
        console.log(response.data.experiences);
        experiences.map((experience) => {
          if (experience.user_id == this.current_user_id) {
            this.experiences.push(experience);
          }
        });
        console.log(this.experiences);
      });
    },
  },
};
</script>
