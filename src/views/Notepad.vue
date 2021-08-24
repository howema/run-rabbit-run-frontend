<template>
  <div class="notepad-index">
    <section id="services" class="services">
      <div class="container">
        <section id="services" class="services">
          <div class="container">
            <h1 style="border-bottom: 2px double #000"><u></u></h1>
            <h1>
              <b><i>Notepad</i></b>
            </h1>
            <h1 style="border-bottom: 2px double #000"><u></u></h1>
            <p></p>
            <div v-for="experience in experiences" v-bind:key="experience.id">
              <p></p>
              <h1 style="border-bottom: 1px double #000"><u></u></h1>

              <h1>
                <u>
                  <b>{{ experience.title }}</b>
                </u>
              </h1>
              <h1 style="border-bottom: 1px double #000"><u></u></h1>
              <p>
                <b>Notes:</b>
                {{ experience.notes }}
              </p>

              <b><u>Task 1:</u></b>
              {{ experience.task1 }}

              <!-- <ol>
          <b>Teeny tasks:</b>
          <li>
            {{ experience.task1a }}
          </li>
          <li>
            {{ experience.task1b }}
          </li>
          <li>
            {{ experience.task1c }}
          </li>
        </ol> -->
              <p></p>
              <b><u>Task 2:</u></b>
              {{ experience.task2 }}

              <!-- <ol>
          <b>Teeny tasks:</b>
          <li>
            {{ experience.task2a }}
          </li>
          <li>
            {{ experience.task2b }}
          </li>
          <li>
            {{ experience.task2c }}
          </li>
        </ol> -->
              <p></p>
              <b><u>Task 3:</u></b>
              {{ experience.task3 }}

              <!-- <ol>
          <b>Teeny tasks:</b>
          <li>
            {{ experience.task3a }}
          </li>
          <li>
            {{ experience.task3b }}
          </li>
          <li>
            {{ experience.task3c }}
          </li>
        </ol> -->

              <p></p>

              <p>
                <b>Timeline:</b>
                {{ experience.timeline }}
              </p>
              <p>
                <b>Travel type:</b>
                {{ experience.travel_type }}
              </p>
              <p>
                <b>Budget:</b>
                {{ experience.budget }}
              </p>
              <p>
                <i><b>Tags:</b></i>
              </p>
              <div v-for="tag in experience_tags" v-bind:key="tag.id">
                <i>{{ tag.name }}</i>
              </div>
              <p></p>
              <router-link v-bind:to="`/experiences/${experience.id}/edit`">
                <button>Edit Experience</button>
              </router-link>
              <p></p>
            </div>
            <router-link to="/experiences">Back to experiences</router-link>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
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
      experiences: [],
    };
  },
  created: function () {
    axios.get("/experiences/" + this.$route.params.id).then((response) => {
      this.experience = response.data;
      this.experience_tags = response.data.tags;
      console.log(response.data);
    });
    this.getTags();
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
    getTags: function () {
      axios.get("/tags/").then((response) => {
        response.data.forEach((item) => {
          console.log(item);
          var object = {};
          object["name"] = item.name;
          object["id"] = item.id;
          this.options.push(object);
        });
        this.tags = response.data;
        console.log(response.data);
        console.log(this.options);
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
