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
                    <h3>{{ experience.title }}</h3>
                  </router-link>
                </div>
              </div>
              <!-- </div> -->
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
