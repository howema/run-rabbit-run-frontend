<template>
  <div>
    <div class="bucket-index">
      <section id="services" class="services">
        <div class="container">
          <section id="portfolio" class="portfolio">
            <div class="container">
              <div class="section-title" data-aos="zoom-out">
                <h2><i>Make sure it's full.</i></h2>
                <p>WELCOME TO YOUR Bucket</p>

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
            </div>
          </section>
        </div>
        <!-- ======= F.A.Q Section ======= -->
        <section id="faq" class="faq">
          <div class="container">
            <div class="section-title" data-aos="zoom-out">
              <h2>F.A.Q / What Now?</h2>
              <p></p>
            </div>

            <ul class="faq-list">
              <li>
                <div data-bs-toggle="collapse" class="collapsed question" href="#faq1">
                  I did it!
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq1" class="collapse" data-bs-parent=".faq-list">
                  <p>The world is your oyster!</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq2" class="collapsed question">
                  Enjoy Yourself...

                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq2" class="collapse" data-bs-parent=".faq-list">
                  <p>"It's later than you think."</p>
                </div>
              </li>

              <li>
                <div data-bs-toggle="collapse" href="#faq3" class="collapsed question">
                  Why is there a button on the "#NothingToIt" page that links to "All"?
                  <i class="bi bi-chevron-down icon-show"></i>
                  <i class="bi bi-chevron-up icon-close"></i>
                </div>
                <div id="faq3" class="collapse" data-bs-parent=".faq-list">
                  <p>Cause there's nothing to any of it, baby.</p>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <!-- End F.A.Q Section -->
      </section>
    </div>
  </div>
</template>

<style>
/* img {
  max-width: 300px;
} */
/* bucket-index {
  background-image: url("src/assets/img/yellow-bucket.jpg");
} */
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      image: {},
      experience: {},
    };
  },
  created: function () {
    this.indexExperiences();
  },
  methods: {
    indexExperiences: function () {
      axios.get("/experiences-true").then((response) => {
        console.log("experiences index", response.data);
        this.experiences = response.data;
        console.log(this.experiences);
      });
    },
  },
};
</script>
