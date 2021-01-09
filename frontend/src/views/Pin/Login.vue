<template>
  <div class="container">
    <PinInput v-on:submit-password="onLogin" />
    <p class="text-xl text-red-600 text-center mt-4" v-if="isError">
      {{ inCorrectLabel.replace("{}", "PIN") }}
    </p>
  </div>
</template>
<script>
import PinInput from "@/components/auth/Pin.vue";
import services from "@/services";
export default {
  components: {
    PinInput
  },
  data() {
    return {
      isError: false
    };
  },
  computed: {
    inCorrectLabel: function() {
      return this.$store.state.locale.labelError.incorrect;
    }
  },
  methods: {
    onLogin: async function(pin) {
      this.isError = false;
      const isCorrect = await services().auth.pin({ pin });
      if (isCorrect) {
        this.$store.commit("setFirstTime", false);
        const userInfo = localStorage.getItem("userInfo");
        this.$store.commit("setUserInfo", JSON.parse(userInfo));
        this.$router.push({ name: "dashboard-home" });
        return;
      }
      this.isError = true;
    }
  }
};
</script>
<style scoped>
.container {
  width: 50vw;
  margin: 40vh auto;
}
</style>
