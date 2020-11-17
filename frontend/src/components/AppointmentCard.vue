<template>
  <div class="border-b">
    <div class="overflow-hidden block mx-auto w-full lg:w-4/5">
      <div class="px-4 flex mb-2 items-center">
        <div
          class="w-2 h-2 p-2 bg-gray-600 rounded-full mr-16"
          v-if="status === 'in-progress'"
        ></div>
        <div
          class="w-2 h-2 p-2 bg-yellow-600 rounded-full mr-16"
          v-if="status === 'vaccinating'"
        ></div>
        <div
          class="w-2 h-2 p-2 bg-green-600 rounded-full mr-16"
          v-if="status === 'vaccinated'"
        ></div>
        <div
          class="w-2 h-2 p-2 bg-red-600 rounded-full mr-16"
          v-if="status === 'overdue'"
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
    status: {
      type: String,
      default: "default",
      validator: function(val) {
        return ["in-progress", "vaccinated", "vaccinating", "overdue"].includes(
          val
        );
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
