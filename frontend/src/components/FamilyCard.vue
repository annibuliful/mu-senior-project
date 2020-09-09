<template>
  <div class="lg:rounded overflow-hidden lg:shadow-lg mx-12">
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">
        {{ name }}
        <span class="text-xs text-gray-600 font-normal"
          >({{ birthDate | oldWithBirthDate }})</span
        >
      </div>
      <p class="text-gray-700 text-base">
        {{ lebels.disease }}
      </p>
      <ul class="list-disc px-6">
        <li v-for="disease in diseases" :key="disease.id">{{ disease.tag }}</li>
      </ul>
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
  computed: {
    lebels: function() {
      return this.$store.state.locale.label;
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
