import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashboardIndex from "../views/Dashboard/Index.vue";
import DashboardHome from "../views/Dashboard/Home.vue";
import DashboardSetting from "../views/Dashboard/Setting.vue";
import DashboardFamily from "../views/Dashboard/Family.vue";
import DashboardVaccineList from "../views/Dashboard/VaccineList.vue";
import VaccineDetails from "../views/Vaccine/VaccineDetails.vue";
import VaccinePackager from "../views/Dashboard/VaccinePackager.vue";
import VaccinePackagerDetails from "../views/Packager/VaccinePackagerDetails.vue";
import RecordVaccineForm from "../views/RecordVaccine.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/dashboard",
    component: DashboardIndex,
    children: [
      {
        path: "/",
        name: "dashboard-index",
        redirect: { name: "dashboard-home" },
      },
      {
        path: "home",
        name: "dashboard-home",
        component: DashboardHome,
      },
      {
        path: "vaccine",
        name: "dashboard-vaccine",
        component: DashboardVaccineList,
      },
      {
        path: "vaccine/details/:id",
        component: VaccineDetails,
      },
      {
        path: "vaccinepackager",
        name: "dashboard-packager",
        component: VaccinePackager,
      },
      {
        path: "vaccinepackager/details/:id",
        component: VaccinePackagerDetails,
      },
      {
        path: "setting",
        name: "dashboard-setting",
        component: DashboardSetting,
      },
      {
        path: "family",
        name: "dashboard-family",
        component: DashboardFamily,
      },
      {
        path: "recordvaccine",
        component: RecordVaccineForm,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
