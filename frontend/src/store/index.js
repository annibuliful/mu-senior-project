import Vue from "vue";
import Vuex from "vuex";
import locale from "../locale";
import services from "@/services";
import constrainDisease from "./constrainDisease";
// import axios from "axios";
import { COVID_API } from "@/constants/api";
// import { format } from "date-fns";
// import { en, th } from "date-fns/locale";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    listOverdueVaccines: [],
    familyInfoForOverdueVaccines: {},
    covidStat: {
      confirmed: 0,
      recovered: 0,
      hospitalized: 0,
      death: 0,
      newConfirmed: 0,
      newRecovered: 0,
      newHospitalized: 0,
      newDeath: 0
    },
    exportFileBlob: null,
    tempFamily: {},
    isFirstTime: false,
    constrainDisease: constrainDisease,
    networkMode: "online",
    calendarLocale: "en-US",
    locale: locale["en-US"],
    listFamilies: [],
    appointmentList: [],
    selectedVaccineDetails: {},
    selectedPackagerDetails: {},
    selectedCalendarDate: null || new Date(),
    baseRecordVaccine: {},
    isVaccinateComplete: false,
    listRecords: [],
    selectedNewsDetails: {}
  },
  mutations: {
    async getCovidInfo(state) {
      try {
        const response = await fetch(COVID_API, {
          method: "GET",
          mode: "cors"
        });
        const data = await response.json();
        state.covidStat = {
          confirmed: data.Confirmed,
          recovered: data.Recovered,
          hospitalized: data.Hospitalized,
          death: data.Deaths,
          newConfirmed: data.NewConfirmed,
          newRecovered: data.NewRecovered,
          newHospitalized: data.NewHospitalized,
          newDeath: data.NewDeaths
        };
      } catch (e) {
        console.error("covid-error", e);
      }
    },
    setExportFileBlob(state, file) {
      state.exportFileBlob = file;
    },
    setfamilyInfoForOverdueVaccines(state, info) {
      state.familyInfoForOverdueVaccines = info;
    },
    setlistOverdueVaccines(state, list) {
      state.listOverdueVaccines = list;
    },
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
      const filteredData = data.filter(
        eachFamily => eachFamily.isDelete === false
      );
      state.listFamilies = filteredData;
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
    getNewsDetail(state, id) {
      state.selectedNewsDetails = state.locale.newsData.find(
        x => x.newsId === id
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
