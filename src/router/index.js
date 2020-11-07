import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Problem from "../views/Problem.vue";
import Solution from "../views/Solution.vue";
import SignUp from "../views/SignUp.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/problem",
    name: "Problem",
    component: Problem
  },
  {
    path: "/solution",
    name: "Solution",
    component: Solution
  },
  {
    path: "/signup",
    name: "SignUp",
    component: SignUp
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
