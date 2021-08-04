import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Signup from "../views/Signup.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import Experiences from "../views/ExperiencesIndex.vue";
import Tags from "../views/TagsIndex.vue";
import ExperiencesShow from "../views/ExperiencesShow.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/welcome",
    name: "Welcome",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/Welcome.vue"),
  },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/experiences", name: "experiences-index", component: Experiences },
  { path: "/tags", name: "tags-index", component: Tags },
  { path: "/experiences/:id", name: "experiences-show", component: ExperiencesShow },
  { path: "/experiences/:id/edit", name: "experiences-edit", component: ExperiencesEdit },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
