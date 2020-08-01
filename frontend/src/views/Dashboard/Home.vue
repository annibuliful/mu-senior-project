<template>
  <div>
    <Calendar />
  </div>
</template>
<script>
import Calendar from "@/components/Calendar.vue";

export default {
  components: { Calendar },
  computed: {
    username() {
      return this.$store.state.profileName;
    }
  }
};
</script>
