<template>
  <div>
    <div
      class="px-6 py-4 flex flex-row shadow-xs bg-gray-200 mt-0 md:justify-center"
    >
      <!-- Check if there is profile image or not -->
      <div class="flex flex-col">
        <img
          class="w-24 md:w-48"
          v-if="childObject.profileImg"
          :src="childObject.profileImg"
          alt=""
        />
        <img
          class="w-24 md:w-48"
          v-else
          src="../assets/mock-member-profile.svg"
          alt=""
        />
      </div>

      <!-- Show this family's member info in a column-->

      <div class="flex flex-col my-auto ml-2">
        <div class="font-bold text-blue-800 text-lg md:text-2xl md:ml-4">
          {{ childObject.fullname }}
        </div>
        <div class="md:ml-4 md:text-xl">
          {{ localeText.age }}: {{ currentAge }}
        </div>
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
    localeHistory: function() {
      return this.$store.state.locale.historyPage;
    },

    currentAge() {
      return formatDistanceToNow(new Date(this.childObject.birthDate));
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
