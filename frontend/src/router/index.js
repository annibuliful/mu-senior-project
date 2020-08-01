import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ "../views/Dashboard/Index.vue"
      ),
    children: [
      {
        path: "/",
        name: "dashboard-index",
        redirect: { name: "dashboard-home" }
      },
      {
        path: "home",
        name: "dashboard-home",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Home.vue"
          )
      },
      {
        path: "setting",
        name: "dashboard-setting",
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ "../views/Dashboard/Setting.vue"
          )
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
