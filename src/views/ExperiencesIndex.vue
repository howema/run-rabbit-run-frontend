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
            <!-- <div class="columns is-multiline"> -->
            <div v-for="experience in experiences" v-bind:key="experience.id" class="col-3">
              <div v-if="experience.complete == false">
                <!-- <div class="card" style="width: 19rem"> -->
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
          <!-- </div> -->
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

/* * {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.column {
  float: left;
  width: 25%;
  padding: 0 10px;
}


.row {
  margin: 0 -5px;
}


.row:after {
  content: "";
  display: table;
  clear: both;
}


@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}


.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background-color: #f1f1f1;
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
