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
import InternetToast from "@/components/Internet-toast.vue";

export default {
  data: function() {
    return {
      isShowInternetToast: false
    };
  },
  components: {
    InternetToast
  },
  mounted() {
    this.openNotification();
    this.checkFirstTime();
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
    openNotification: function() {
      if (Notification.permission !== "denied") {
        Notification.requestPermission().then(function(permission) {
          if (permission === "granted") {
            new Notification("Welcome to Vaccinet App");
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

.input-primary {
  @apply shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight;
}
</style>
