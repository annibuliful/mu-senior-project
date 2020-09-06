<template>
  <div class="lg:rounded overflow-hidden border-b">
    <div class="px-4 flex justify-between mb-2 items-center">
      <div>
        <p class="text-md">{{ childname }}</p>
        <!-- <p class="text-xs">{{ childname }}</p> -->
        <p class="text-sm text-gray-600">{{ note }}</p>
        <ul>
          <li v-for="value in vaccines" :key="value" class="text-xs">
            - {{ value }}
          </li>
        </ul>
      </div>
      <div>
        <span class="text-xs text-gray-600 font-normal ">
          {{ time }}
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    vaccines: {
      type: Array,
      default: function() {
        return [];
      }
    },
    note: {
      type: String,
      default: "Note Information"
    },
    childname: {
      type: String,
      default: "child A"
    },
    time: {
      type: String,
      default: "13:30"
    }
  }
};
</script>
