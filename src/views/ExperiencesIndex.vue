<template>
  <div>
    <div class="experiences-index">
      <section id="portfolio" class="portfolio">
        <div class="container">
          <div class="section-title" data-aos="zoom-out">
            <h2></h2>
            <p>All Experiences</p>
          </div>

          <div class="row">
            <div v-for="experience in experiences" v-bind:key="experience.id" class="col-3">
              <!-- <div v-if="experience.complete == false"> -->
              <div class="portfolio-item filter-card">
                <div class="portfolio-img">
                  <div class="portfolio-info"></div>
                  <a
                    href="assets/img/portfolio/portfolio-4.jpg"
                    data-gallery="portfolioGallery"
                    class="portfolio-lightbox preview-link"
                    title="Card 2"
                  >
                    <!-- <i class="bx bx-plus"></i> -->
                  </a>
                  <img v-bind:src="experience.image" class="img-fluid" alt="" />
                  <h4>{{ experience.title }}</h4>
                  <!-- <p>{{ experience.notes }}</p> -->
                  <!-- <a href="portfolio-details.html" class="details-link" title="More Details">
                    <i class="bx bx-link"></i>
                  </a> -->
                  <!-- </div> -->
                </div>
              </div>
            </div>
          </div>

          <!-- <div class="portfolio-item filter-card"> -->
          <div class="row">
            <div v-for="experience in experiences" v-bind:key="experience.id" class="col-3">
              <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                <div v-if="experience.complete == false">
                  <router-link v-bind:to="`/experiences/${experience.id}`">
                    <div class="portfolio-img">
                      <img v-bind:src="experience.image" class="img-fluid" alt="" />
                    </div>
                  </router-link>
                  <div class="portfolio-info">
                    <h4>{{ experience.title }}</h4>
                    <p>{{ experience.notes }}</p>
                    <a
                      href="assets/img/portfolio/portfolio-4.jpg"
                      data-gallery="portfolioGallery"
                      class="portfolio-lightbox preview-link"
                      title="Card 2"
                    ></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <router-link to="/experiences/new"><button>Add an Experience</button></router-link>
    </div>
  </div>
</template>

<style>
/* img {
  max-width: 300px;
} */
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      image: {},
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/experiences").then((response) => {
        console.log("experiences index", response.data);
        this.experiences = response.data;
        console.log(this.experiences);
      });
    },
  },
};
</script>
