<template>
  <div class="sm:mb-20">
    <p class="text-2xl mb-10 border-b-2 border-blue-700">
      {{ welcomeWord }}
    </p>
    <Calendar />
    <br />
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-if="selectedDate">
      {{ selectedDate }}
    </p>
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-else>
      {{ recentActivity }}
    </p>
  </div>
</template>
<script>
import Calendar from "@/components/Calendar.vue";

export default {
  data() {
    return {
      selectedDate: null
    };
  },
  components: { Calendar },
  computed: {
    recentActivity() {
      return this.$store.state.locale.recentActivity;
    },
    profileName() {
      return this.$store.state.userInfo;
    },
    welcomeWord() {
      return this.$store.state.locale.welcome;
    }
  }
};
</script>
