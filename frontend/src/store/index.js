import Vue from "vue";
import Vuex from "vuex";
import locale from "../locale";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    networkMode: "online",
    calendarLocale: "en-US",
    locale: locale["en-US"],
    profileName: "Jarupong",
    calendarEvents: [
      {
        id: 1,
        description: "Clean the house.",
        date: new Date(),
        isCompleted: false,
        color: "red"
      },
      {
        id: 2,
        description: "Clean the house2",
        date: new Date(2020, 4, 14),
        isCompleted: false,
        color: "red"
      }
    ],
    listFamilies: [
      {
        fullname: "test1",
        birthDate: new Date(2016, 4, 14),
        diseases: ["a1", "b2", "c3"]
      },
      {
        fullname: "test2",
        birthDate: new Date(2014, 4, 14),
        diseases: ["a", "b", "c"]
      }
    ]
  },
  mutations: {
    changeLanguage(state, type) {
      state.locale = locale[type];
      state.calendarLocale = type;
    },
    changeNetworkMode(state, mode) {
      state.networkMode = mode;
    },
    async listFamilies(state, data) {
      state.listFamilies = data;
    }
  },
  actions: {},
  modules: {}
});
