<template>
  <div class="sm:mb-20">
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ welcomeWord }} {{ profileName.fullname }}
    </p>
    <Calendar />
  </div>
</template>
<script>
import Calendar from "@/components/Calendar.vue";

export default {
  components: { Calendar },
  computed: {
    profileName() {
      return this.$store.state.userInfo;
    },
    welcomeWord() {
      return this.$store.state.locale.welcome;
    }
  }
};
</script>
