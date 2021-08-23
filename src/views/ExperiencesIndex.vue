<template>
  <div class="experiences-index">
    <section id="portfolio" class="portfolio">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h2></h2>
          <p>All Experiences</p>
        </div>

        <ul id="portfolio-flters" class="d-flex justify-content-end" data-aos="fade-up">
          <li data-filter="*" class="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>
        <div class="col">
          <div v-for="experience in experiences" v-bind:key="experience.id">
            <div v-if="experience.complete == false">
              <div class="row portfolio-container" data-aos="fade-up">
                <div class="row row-cols-2 row-cols-md-2 g-4">
                  <div class="col-lg-4 col-md-6 portfolio-item filter-card">
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
                      >
                        <i class="bx bx-plus"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <router-link to="/experiences/new"><button>Add an Experience</button></router-link>
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
