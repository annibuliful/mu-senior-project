import Vue from "vue";
import Vuex from "vuex";
import locale from "../locale";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    calendarLocale: "en-US",
    locale: locale["en-US"],
    profileName: "test",
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
    ]
  },
  mutations: {
    changeLocale(state, type) {
      state.locale = locale[type];
    }
  },
  actions: {},
  modules: {}
});
