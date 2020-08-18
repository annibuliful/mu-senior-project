<template>
  <Toast
    :icon="
      netWorkStatus === 'online'
        ? require('../assets/icons/wifi.svg')
        : require('../assets/icons/wifi-off.svg')
    "
    :isShow="showStatus"
    :title="
      netWorkStatus === 'online'
        ? networkModeLocale.online
        : networkModeLocale.offline
    "
    v-on:on-close="onClose"
  />
</template>
<script>
import Toast from "@/components/common/Toast.vue";

export default {
  methods: {
    onClose() {
      this.$emit("on-close");
    }
  },
  computed: {
    netWorkStatus: function() {
      return this.$store.state.networkMode;
    },
    networkModeLocale: function() {
      return this.$store.state.locale.networkMode;
    }
  },
  props: {
    showStatus: {
      type: Boolean,
      default: false
    },
    timeout: {
      type: Number,
      default: 1000
    }
  },
  components: {
    Toast
  }
};
</script>
