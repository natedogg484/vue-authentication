import Vue from "vue";
import Router from "vue-router";
// views
import HomePage from "./views/HomePage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage
    },
    {
      path: "/about",
      name: "about",
      component: () =>
        import( "./views/AboutPage.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/LoginPage.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/RegistrationPage.vue")
    },
    {
      path: "*",
      name: "404",
      component: () => import("./views/ErrorPage.vue")
    }
  ]
});
