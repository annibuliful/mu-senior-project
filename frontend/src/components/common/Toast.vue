<template>
  <div
    class="toast rounded shadow-lg border p-4 bg-white items-center"
    :class="isShow ? 'visible' : 'invisible'"
  >
    <div class="flex w-full justify-evenly">
      <img class="inline" :src="icon" />
      <p class="inline ml-4 font-semibold">{{ title }}</p>
      <img
        @click="onClose"
        class="inline w-4 h-4 ml-4 mt-1 cursor-pointer"
        :src="require('@/assets/icons/close.svg')"
      />
    </div>
    <p class="mt-6" v-if="message">{{ message }}</p>
  </div>
</template>
<script>
export default {
  methods: {
    onClose() {
      this.$emit("on-close");
    }
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: "title"
    },
    icon: {
      type: String,
      default: "@/assets/icons/wifi.svg"
    },
    message: {
      type: String
    }
  }
};
</script>
<style scoped>
.toast {
  @apply fixed;
  z-index: 3;
  /* width: 400px; */
  left: 12vw;
  bottom: 12vh;
}
</style>
