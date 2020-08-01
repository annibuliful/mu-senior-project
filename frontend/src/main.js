import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import VCalendar from "v-calendar";
Vue.use(VCalendar, {
  locales: {
    "th-TH": {
      firstDayOfWeek: 1
    }
  }
});
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
