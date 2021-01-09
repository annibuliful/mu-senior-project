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
import HistoryFamilyMember from "../views/Family/HistoryFamilyMember.vue";
import SummaryFamilyMember from "../views/Family/SummaryFamilyMember.vue";
import LanguageSetting from "../views/Setting/Language.vue";
import PreLogin from "../views/PreLogin.vue";
import VaccineInfo from "../views/Vaccine/VaccineInfo.vue";
import NewsInfo from "../views/News/PreLoginNewsInfo.vue";
import PinPassword from "../views/Pin/Login.vue";
import LoggedinNews from "../views/News/LoggedinNews.vue";
import NewsInfoLoggedin from "../views/News/NewsInfoLoggedin.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/pin",
    name: "Pin",
    component: PinPassword,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pre-login",
    name: "pre-login",
    component: PreLogin,
  },
  {
    path: "/vaccine/:id",
    name: "vaccine-info",
    component: VaccineInfo,
  },
  {
    path: "/news/:newsId",
    name: "news-info",
    component: NewsInfo,
  },
  {
    path: "/language",
    name: "setting-language",
    component: LanguageSetting,
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
        path: "news",
        name: "dashboard-news",
        component: LoggedinNews,
      },
      {
        path: "news/details/:newsId",
        name: "logged-news-info",
        component: NewsInfoLoggedin,
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
        path: "family/history/:id",
        name: "history-family-member",
        component: HistoryFamilyMember,
      },
      {
        path: "family/summary/:id",
        name: "summary-family-member",
        component: SummaryFamilyMember,
      },
      {
        path: "family/edit/:id",
        name: "edit-family-profile",
        component: EditFamilyProfile,
      },
      {
        path: "family/report/:id",
        name: "report-family-profile",
        component: ReportFamilyProfile,
      },
      {
        path: "/appointment",
        name: "appointment-index",
        component: Appointment,
      },
      {
        path: "/appointment/create-appointment",
        name: "appointment-create",
        component: CreateAppointment,
      },
      {
        path: "/appointment/child/:id",
        name: "appointment-child-list",
        component: ChildAppointment,
      },
      {
        path: "/appointment/child/suggestion",
        name: "appointment-child-suggestion",
        component: SuggestionAppointment,
      },
    ],
  },
  {
    path: "/recordvaccine",
    name: "record-vaccine",
    component: RecordVaccineForm,
  },
  {
    path: "/record-vaccine/:id",
    name: "record-vaccine-id",
    component: RecordVaccineByAppointment,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { x: 0, y: 0 };
  },
});

export default router;
