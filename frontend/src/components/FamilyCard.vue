<template>
  <div class="lg:rounded overflow-hidden lg:shadow-lg mx-12 flex flex-row">
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
        <!-- <li v-if="!diseases.length">{{ lebels.noneCongenitalDisease }}</li> -->
      </ul>
    </div>
    <div class="mr-5 ml-auto my-auto flex flex-row">
      <router-link
        :to="{
          name: 'appointment-child-list',
          params: { id: id }
        }"
      >
        <img
          class="mr-3 h-full"
          src="../assets/icons/calendar-icon.svg"
          alt=""
        />
      </router-link>

      <router-link
        :to="{
          name: 'report-family-profile',
          params: { id: id }
        }"
      >
        <img class="mr-3 h-full" src="../assets/icons/report-icon.svg" alt="" />
      </router-link>

      <router-link
        :to="{
          name: 'edit-family-profile',
          params: { id: id }
        }"
      >
        <img class="h-full" src="../assets/icons/edit-icon.svg" alt="" />
      </router-link>
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
    id: {
      type: Number,
      required: true
    },
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
