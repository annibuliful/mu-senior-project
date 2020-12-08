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
    window.navigator.onLine ? setMode("online") : setMode("offline");
    window.addEventListener("online", () => {
      setMode("online");
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
    openNotification: async function() {
      if (Notification.permission === "granted") {
        new Notification("Welcome to Vaccinet App");
      } else if (Notification.permission !== "denied") {
        const permission = await Notification.requestPermission();
        if (permission === "granted") {
          new Notification("Welcome to Vaccinet App");
        }
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
</style>
