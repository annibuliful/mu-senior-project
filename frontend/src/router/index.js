import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import DashboardIndex from "../views/Dashboard/Index.vue";
import DashboardHome from "../views/Dashboard/Home.vue";
import DashboardSetting from "../views/Dashboard/Setting.vue";
import DashboardFamily from "../views/Dashboard/Family.vue";
import DashboardVaccineList from "../views/Dashboard/VaccineList.vue";
import VaccineDetails from "../views/Vaccine/VaccineDetails.vue";
// import VaccineIndex from "../views/Vaccine/Index.vue"
import Appointment from "../views/Appointment/Index.vue";
import ChildAppointment from "../views/Appointment/List-child.vue";

import CreateAppointment from "../views/Appointment/Create.vue";

import VaccinePackager from "../views/Dashboard/VaccinePackager.vue";
import VaccinePackagerDetails from "../views/Packager/VaccinePackagerDetails.vue";
import RecordVaccineForm from "../views/RecordVaccine.vue";
import SuggestionAppointment from "../views/Appointment/Suggestion.vue";
import RecordVaccineByAppointment from "../views/Record/Vaccine.vue";
import ReportFamilyProfile from "../views/Family/Report.vue";
import EditFamilyProfile from "../views/Family/EditFamilyProfile.vue";

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
        path: "vaccine",
        name: "dashboard-vaccine",
        component: DashboardVaccineList
      },
      {
        path: "vaccine/details/:id",
        component: VaccineDetails
      },
      {
        path: "vaccinepackager",
        name: "dashboard-packager",
        component: VaccinePackager
      },
      {
        path: "vaccinepackager/details/:id",
        component: VaccinePackagerDetails
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
      },
      {
        path: "family/edit/:id",
        name: "edit-family-profile",
        component: EditFamilyProfile
      },
      {
        path: "family/report/:id",
        name: "report-family-profile",
        component: ReportFamilyProfile
      },
      {
        path: "/appointment",
        name: "appointment-index",
        component: Appointment
      },
      {
        path: "/appointment/create-appointment",
        name: "appointment-create",
        component: CreateAppointment
      },
      {
        path: "/appointment/child/:id",
        name: "appointment-child-list",
        component: ChildAppointment
      },
      {
        path: "/appointment/child/:id/suggestion",
        name: "appointment-child-suggestion",
        component: SuggestionAppointment
      }
    ]
  },
  {
    path: "/recordvaccine",
    name: "record-vaccine",
    component: RecordVaccineForm
  },
  {
    path: "/record-vaccine/:id",
    name: "record-vaccine-id",
    component: RecordVaccineByAppointment
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
