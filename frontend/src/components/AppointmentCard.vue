<template>
  <div class="border-b">
    <div class="overflow-hidden block mx-auto w-full lg:w-4/5">
      <div class="px-4 flex mb-2 items-center">
        <div
          class="w-2 h-2 p-2 bg-blue-600 rounded-full mr-16"
          v-if="color === 'default'"
        ></div>
        <div
          class="w-2 h-2 p-2 bg-blue-600 rounded-full mr-16"
          v-if="color === 'warning'"
        ></div>
        <div
          class="w-2 h-2 p-2 bg-blue-600 rounded-full mr-16"
          v-if="color === 'complete'"
        ></div>
        <div style="width: 80%">
          <p class="text-md">{{ childname }}</p>
          <p class="text-sm text-gray-600">{{ note }}</p>
          <ul>
            <li v-for="value in vaccines" :key="value" class="text-xs">
              - {{ value }}
            </li>
          </ul>
        </div>
        <div class="text-xs text-gray-600 font-normal text-right w-auto">
          {{ time }}
        </div>
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
    color: {
      type: String,
      default: "default",
      validator: function(val) {
        return ["default", "warning", "complete"].includes(val);
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
