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
          </div>
        </div>
        <!-- ======= Solid Button Section ======= -->
        <section id="cta" class="cta">
          <div class="container">
            <div class="row" data-aos="zoom-out">
              <div class="col-lg-9 text-center text-lg-start"></div>
              <div class="col-lg-3 cta-btn-container text-center">
                <a class="cta-btn align-middle" href="#">Call To Action</a>
              </div>
            </div>
          </div>
        </section>
        <!-- End Solid Button Section -->
      </div>
    </section>
  </div>
</template>

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
