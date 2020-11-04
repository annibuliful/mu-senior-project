<template>
  <div>
    <div class="px-6 py-4 bg-gray-300 flex flex-row">
      <!-- Check if there is profile image or not -->
      <img
        class="w-24"
        v-if="childObject.profileImg"
        :src="childObject.profileImg"
        alt=""
      />
      <img class="w-24" v-else src="../assets/mock-member-profile.svg" alt="" />

      <!-- Show this family's member info in a column-->

      <div class="flex flex-col my-auto ml-2">
        <div>{{ childObject.fullname }}</div>
        <div>{{ localeText.age }}: {{ currentAge }}</div>
      </div>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow } from "date-fns";
export default {
  computed: {
    localeText: function() {
      return this.$store.state.locale.label;
    },
    currentAge() {
      return formatDistanceToNow(new Date(this.childObject.birthDate));
      //   return this.$store.state.calendarLocale;
    },
  },
  props: {
    childObject: {
      type: Object,
      required: true,
    },
  },
};
</script>
