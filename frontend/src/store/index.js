import Vue from "vue";
import Vuex from "vuex";
import locale from "../locale";
import services from "@/services";
import constrainDisease from "./constrainDisease";
// import { format } from "date-fns";
// import { en, th } from "date-fns/locale";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tempFamily: {},
    isFirstTime: false,
    constrainDisease: constrainDisease,
    networkMode: "online",
    calendarLocale: "en-US",
    locale: locale["en-US"],
    profileName: "Jarupong",
    listFamilies: [],
    listDiseases: ["ภูมิคุ้มกันบกพร่อง", "หอบหืด", "HIV"],
    listVaccines: ["ไวรัสตับอักเสบ A", "ไวรัสตับอักเสบ B", "ไวรัสตับอักเสบ C"],
    appointmentList: [],
    selectedVaccineDetails: {},
    selectedPackagerDetails: {},
    selectedCalendarDate: null || new Date(),
    baseRecordVaccine: {},
    isVaccinateComplete: false,
    listRecords: []
  },
  mutations: {
    changeIsVaccinateComplete(state) {
      state.isVaccinateComplete = !state.isVaccinateComplete;
    },
    setBaseRecordVaccine(state, data) {
      state.baseRecordVaccine = data;
    },
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
    setNewAppointmentList(state, data) {
      state.appointmentList = data;
    },
    setFirstTime(state, data) {
      state.isFirstTime = data;
    },
    setTempFamilyInfo(state, data) {
      state.tempFamily = data;
    },
    async listFamilies(state) {
      const user = localStorage.getItem("userInfo");
      const { userId } = JSON.parse(user);
      const data = await services().family.list(userId, state.calendarLocale);
      state.listFamilies = data;
    },
    async listAppointmentByChildId(state, cid) {
      const data = await services().appointment.listByChildId(
        cid,
        state.calendarLocale
      );

      state.appointmentList = data;
    },

    async listRecordsByChildId(state, cid) {
      const data = await services().record.getByChildId(cid);
      state.listRecords = data;
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
      state.selectedPackagerDetails = state.locale.packagers.find(
        x => x.packageId === id
      );
    }
  },
  actions: {},
  modules: {}
});
