<template>
  <div class="tags-index">
    <!-- ======= Services Section ======= -->
    <h1></h1>
    <h2></h2>
    <h1></h1>

    <section id="services" class="services">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h2>What's Your Mood?</h2>
          <p>Sort by Tag</p>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6">
            <div class="icon-box" data-aos="zoom-in-left">
              <div class="icon"><i class="bi bi-lightning" style="color: #ff689b"></i></div>
              <h4 class="title"><a href="/just-an-idea">Just An Idea</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5 mt-md-0">
            <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="100">
              <div class="icon"><i class="bi bi-mic" style="color: #e9bf06"></i></div>
              <h4 class="title"><a href="/face-your-fears">Face Your Fears</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-5 mt-lg-0">
            <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="200">
              <div class="icon"><i class="bi bi-house-door" style="color: #3fcdc7"></i></div>
              <h4 class="title"><a href="/life-milestones">Life Milestones</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="300">
              <div class="icon"><i class="bi bi-globe" style="color: #41cf2e"></i></div>
              <h4 class="title"><a href="/travel">Travel</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="400">
              <div class="icon"><i class="bi bi-binoculars" style="color: #d6ff22"></i></div>
              <h4 class="title"><a href="/especially-weird">Especially Weird</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 mt-5">
            <div class="icon-box" data-aos="zoom-in-left" data-aos-delay="500">
              <div class="icon"><i class="bi bi-check2-circle" style="color: #4680ff"></i></div>
              <h4 class="title"><a href="/nothing-to-it">Nothing To It</a></h4>
              <p class="description">Description here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Services Section -->
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      tags: [],
    };
  },
  created: function () {
    this.indexTags();
  },
  methods: {
    indexTags: function () {
      axios.get("/tags").then((response) => {
        console.log("tags index", response);
        this.tags = response.data;
      });
    },
  },
};
</script>
