<template>
  <div>
    <!-- ======= Hero Section ======= -->
    <section id="hero" class="d-flex flex-column justify-content-end align-items-center">
      <div id="heroCarousel" data-bs-interval="5000" class="container carousel carousel-fade" data-bs-ride="carousel">
        <!-- Slide 1 -->
        <!-- <div class="home"> -->
        <div class="carousel-item active">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown">
              <span>Run Rabbit Run</span>
            </h2>
            <p class="animate__animated fanimate__adeInUp">
              Welcome to your own personal utopia. Adventure is just down the street. Play life in sandbox mode. Plan
              your gap year, delay the real world, or leave it entirely. An app for seasonal workers, digital nomads,
              and flighty fools. For your neighbor and for your sister. For all the bunnies chasing carrots.
            </p>
            <p>Run Rabbit, Run.</p>

            <a href="/experiences/new" class="btn-get-started animate__animated animate__fadeInUp scrollto">
              Start Here
            </a>
          </div>
        </div>
        <!-- Slide 2 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <h2 class="animate__animated animate__fadeInDown"><i>"For Pipedreams and Daydreams"</i></h2>
            <p class="animate__animated animate__fadeInUp">
              Take your ludicrous longings and transform them into reasonable requests! Cheers to both fleeting thrills
              and enduring success. It’s our “problem-free philosophy.” It’s our “Pinterest for Bucket List.” It’s: “An
              inappropriately casual approach to life.”
            </p>
            <a href="/tags" class="btn-get-started animate__animated animate__fadeInUp scrollto">What's Your Mood?</a>
          </div>
        </div>
        <!-- Slide 3 -->
        <div class="carousel-item">
          <div class="carousel-container">
            <ul v-if="isLoggedIn()">
              <h2 class="animate__animated animate__fadeInDown"><i>"The Flavor Overtaking the Nation"</i></h2>
              <p class="animate__animated animate__fadeInUp">
                Okay {{ user.name }}, we know your favorite thing is {{ user.favorite_thing }}. Unfortunately, life
                isn't all {{ user.favorite_thing }} and roses - as they say. It's time to get out more. To spread your
                wings and fly. Time to work toward your goals. Good news! Our clinical research tells us that success
                tastes like {{ user.favorite_thing }}. So there's that to look forward to.
              </p>
              <a href="/notepad" class="btn-get-started animate__animated animate__fadeInUp scrollto">Notepad</a>
            </ul>
          </div>
        </div>

        <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
          <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
        </a>

        <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
          <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
        </a>
        <!-- </div> -->
      </div>
      <svg
        class="hero-waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none"
      >
        <defs>
          <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"></path>
        </defs>
        <g class="wave1">
          <use xlink:href="#wave-path" x="50" y="3" fill="rgba(255,255,255, .1)"></use>
        </g>
        <g class="wave2">
          <use xlink:href="#wave-path" x="50" y="0" fill="rgba(255,255,255, .2)"></use>
        </g>
        <g class="wave3">
          <use xlink:href="#wave-path" x="50" y="9" fill="#fff"></use>
        </g>
      </svg>
    </section>
    <!-- End Hero -->
    <!-- ======= About Section ======= -->
    <section id="about" class="about">
      <div class="container">
        <div class="section-title" data-aos="zoom-out">
          <h2>Your Digital Bucket List</h2>
          <p>Learn More</p>
        </div>

        <div class="row content" data-aos="fade-up">
          <div class="col-lg-6">
            <p>
              Run Rabbit Run is a digital bucket list where you organize your desires and break them down into small,
              actionable steps. Take your tall orders and turn them into teeny tasks.
            </p>
            <p>
              Achieving long-term goals has been clinically proven to raise your self esteem over time. Trust us, we
              took Psychology in college. But really, what is life but a collection of real experiences?
            </p>
            <ul>
              <li>
                <i class="ri-check-double-line"></i>
                Create bucket list items all your desired “experiences”
              </li>
              <li>
                <i class="ri-check-double-line"></i>
                Add detailed subtasks to help you achieve each new milestone
              </li>
              <li>
                <i class="ri-check-double-line"></i>
                Assign tags to each experience to by mood
              </li>
              <li>
                <i class="ri-check-double-line"></i>
                Plan/prioritize/pursue!
              </li>
            </ul>
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <p>
              Achieve your goal? Send it over to your bucket and watch overflow. Fill it up, make it heavy. If it’s
              heavy enough, you can’t knock it over. It’s very full, and so are you. You are happy. You live forever.
            </p>
            <a href="/bucket" class="btn-learn-more">What's A Bucket?</a>
          </div>
        </div>
      </div>
    </section>
    <!-- End About Section -->
  </div>
</template>
<!-- 
        <p></p>
        <router-link to="/experiences"><button>View All</button></router-link>
        <p></p>
        <router-link to="/tags"><button>View by Tag</button></router-link>
        <p></p>
        <router-link to="/experiences/new"><button>Add an Experience</button></router-link>
        <p></p>
        <router-link to="/bucket"><button>View Bucket</button></router-link> -->

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      experiences: [],
      image: {},
      users: [],
      user: [],
      current_user_id: localStorage.getItem("user_id"),
    };
  },
  created: function () {
    this.indexUsers();
    axios.get("/users/" + this.current_user_id).then((response) => {
      this.user = response.data;
      console.log(response.data.users);
    });
  },
  methods: {
    indexUsers: function () {
      axios.get("/users").then((response) => {
        console.log("users index", response.data);
        this.users = response.data;
        console.log(this.users);
      });
    },
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
  },
};
</script>
