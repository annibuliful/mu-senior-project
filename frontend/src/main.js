import Vue from "vue";
import App from "./App.vue";
import "./index.css";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import Vuelidate from "vuelidate";
import VCalendar from "v-calendar";
import VueSimpleAlert from "vue-simple-alert";
Vue.use(VCalendar);
Vue.use(Vuelidate);
Vue.use(VueSimpleAlert);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
