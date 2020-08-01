<template>
  <div>
    <p class="text-2xl mb-10">{{ welcomeWord }} {{ profileName }}</p>
    <Calendar />
  </div>
</template>
<script>
import Calendar from "@/components/Calendar.vue";

export default {
  components: { Calendar },
  computed: {
    profileName() {
      return this.$store.state.profileName;
    },
    welcomeWord() {
      return this.$store.state.locale.welcome;
    }
  }
};
</script>
