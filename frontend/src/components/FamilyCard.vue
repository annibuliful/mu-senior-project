<template>
  <div
    class="w-1/4 rounded overflow-hidden shadow-lg mx-12 sm:w-9/12 xs:w-full"
  >
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ name }}
        <span class="text-xs text-gray-600 font-normal"
          >({{ birthDate | oldWithBirthDate }})</span
        >
      </div>
      <p class="text-gray-700 text-base">
        {{ diseases }}
      </p>
    </div>
  </div>
</template>
<script>
import { formatDistanceToNow } from "date-fns";
export default {
  filters: {
    oldWithBirthDate: function(value) {
      return formatDistanceToNow(new Date(value));
    }
  },
  props: {
    name: {
      type: String,
      required: true
    },
    birthDate: {
      type: Date,
      required: true
    },
    diseases: {
      type: Array
    }
  }
};
</script>
