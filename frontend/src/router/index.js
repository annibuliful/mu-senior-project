import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashboardIndex from "../views/Dashboard/Index.vue";
import DashboardHome from "../views/Dashboard/Home.vue";
import DashboardSetting from "../views/Dashboard/Setting.vue";
import DashboardFamily from "../views/Dashboard/Family.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/dashboard",
    component: DashboardIndex,
    children: [
      {
        path: "/",
        name: "dashboard-index",
        redirect: { name: "dashboard-home" }
      },
      {
        path: "home",
        name: "dashboard-home",
        component: DashboardHome
      },
      {
        path: "setting",
        name: "dashboard-setting",
        component: DashboardSetting
      },
      {
        path: "family",
        name: "dashboard-family",
        component: DashboardFamily
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
