import Vue from "vue";
import Vuex from "vuex";
import locale from "../locale";
import services from "@/services";
import constrainDisease from "./constrainDisease";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    constrainDisease: constrainDisease,
    networkMode: "online",
    calendarLocale: "en-US",
    locale: locale["en-US"],
    profileName: "Jarupong",
    listFamilies: [],
    listDiseases: ["ภูมิคุ้มกันบกพร่อง", "หอบหืด", "HIV"],
    listVaccines: ["ไวรัสตับอักเสบ A", "ไวรัสตับอักเสบ B", "ไวรัสตับอักเสบ C"],
    selectedVaccineDetails: {},
    selectedPackagerDetails: {},
    selectedCalendarDate: null || new Date()
  },
  mutations: {
    changeSelectedCalendarDate(state, date) {
      state.selectedCalendarDate = date;
    },
    changeLanguage(state, type) {
      state.locale = locale[type];
      state.calendarLocale = type;
    },
    changeNetworkMode(state, mode) {
      state.networkMode = mode;
    },
    async listFamilies(state) {
      const user = localStorage.getItem("userInfo");
      const { userId } = JSON.parse(user);
      const data = await services().family.list(userId);
      state.listFamilies = data;
    },
    addNewFamilyMember(state, data) {
      state.listFamilies.push(data);
    },
    setUserInfo(state, data) {
      state.userInfo = data;
    },
    getVaccineDetail(state, id) {
      state.selectedVaccineDetails = state.locale.vaccines.find(
        x => x.vaccineId === id
      );
    },
    getPackagerDetail(state, id) {
      state.selectedPackagerDetails = state.locale.vaccinePackages.find(
        x => x.packageId === id
      );
    }
  },
  actions: {},
  modules: {}
});
