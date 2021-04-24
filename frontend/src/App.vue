<template>
  <div id="app">
    <InternetToast
      :showStatus="isShowInternetToast"
      v-on:on-close="isShowInternetToast = false"
    />
    <router-view />
  </div>
</template>
<script>
import { setMode } from "@/services";
import services from "./services";
import { nanoid } from "nanoid";
import InternetToast from "@/components/Internet-toast.vue";
import PWABadge from "pwa-badge";

import { messaging, firestore } from "./firebase";
import { VAPID_KEY } from "./constants/api";
// import RecordForm from "@/components/RecordForm.vue";
export default {
  data: function() {
    return {
      isShowInternetToast: false
    };
  },
  components: {
    InternetToast
    // RecordForm
  },
  mounted() {
    this.setAppBadge();
    this.createNewUserWhenIdNotExist();
    this.openNotification();
    this.testPushNotification();
    this.checkFirstTime();
    this.saveDeviceToken();
    // this.onCloudMessage();
    this.$store.commit("getCovidInfo");
    window.navigator.onLine ? setMode("online") : setMode("offline");
    window.addEventListener("online", () => {
      setMode("online");
      this.$store.commit("getCovidInfo");

      this.$store.commit("changeNetworkMode", "online");
      this.isShowInternetToast = true;
    });
    window.addEventListener("offline", () => {
      this.$store.commit("changeNetworkMode", "offline");
      setMode("offline");
      this.isShowInternetToast = true;
    });
  },
  methods: {
    onCloudMessage: async function() {
      const token = await messaging.getToken({ vapidKey: VAPID_KEY });
      console.log("cloud-token", token);
      messaging.onMessage(payload => {
        console.log("Message received. ", payload);
        new Notification(payload.notification.title);
      });
    },
    saveDeviceToken: async function() {
      const token = await messaging.getToken({ vapidKey: VAPID_KEY });
      console.log("messging-token", { token });
      // firestore.collection('messeging-token').doc(token).set({token, createdDate: new Date()})

      firestore.collection("messeging-token").add({
        serviceWorker: false,
        token
      });
    },
    setAppBadge: async function() {
      // Create an Instance
      const badge = new PWABadge();

      if (badge.isSupported()) {
        console.log("aaaaaa");
        // Hoora!, Supports the Badge feature
      } else {
        console.log("bbbbb");
        // Does not supports
      }
    },
    testPushNotification: async function() {
      // const result = await pushMessage();
      // console.log("result", result);
    },
    openNotification: function() {
      if (Notification.permission === "denied") {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            // new Notification("Welcome to Vaccinet App");
          }
        });
      }
    },
    checkFirstTime: function() {
      const language = localStorage.getItem("language");
      if (language === null) {
        this.$router.push({ name: "setting-language" });
      } else {
        this.$store.commit("changeLanguage", language);
      }
    },
    createNewUserWhenIdNotExist: async function() {
      const userInfo = localStorage.getItem("login-info");
      const isUserIdExist = await services().auth.isUserIdExist(
        JSON.parse(userInfo)
      );

      if (!isUserIdExist) {
        const loginData = { username: nanoid(), password: nanoid() };
        localStorage.setItem("login-info", JSON.stringify(loginData));
        await services().auth.register(loginData);
      }
      const loginInfo = JSON.parse(localStorage.getItem("login-info"));
      const result = await services().auth.login(loginInfo);
      const mergeInfo = { ...result, ...JSON.parse(userInfo) };
      console.log("result", { ...result, userInfo });
      this.$store.commit("setUserInfo", mergeInfo);
      localStorage.setItem("userInfo", JSON.stringify(mergeInfo));
      localStorage.setItem("login-info", JSON.stringify(mergeInfo));
      // this.$router.push({ name: "dashboard-home" });
      // this.$router.push({ name: "dashboard-family" });
    }
  }
};
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center;
  color: #2c3e50;
} */

.btn-primary {
  @apply bg-blue-500 text-white font-bold py-2 px-4 rounded block mx-auto;
}

.btn-danger {
  @apply bg-red-500 text-white font-bold py-2 px-4 rounded block mx-auto;
}

.btn-disabled {
  @apply bg-white border-gray-500 text-gray-500 font-bold py-2 px-4 rounded block mx-auto;
}

.input-primary {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
</style>
