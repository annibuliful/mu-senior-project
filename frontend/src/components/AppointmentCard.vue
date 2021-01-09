<template>
  <div>
    <div class="overflow-hidden block mx-auto w-full lg:w-4/5">
      <div class="px-4 flex mb-2 items-center ">
        <div
          class=" p-2 bg-gray-400 rounded-full mr-2 w-1/3 text-center relative"
          v-if="status === 'in-progress'"
        >
          {{ dateFormat }}
          <div
            class="absolute w-1/5  bg-gray-400 mx-auto top-0 right-0 left-0"
            style="height: 100px;z-index:-1;"
          ></div>
        </div>
        <div
          class="p-2 bg-yellow-400 rounded-full mr-2 w-1/3 text-center"
          v-if="status === 'vaccinating'"
        >
          {{ dateFormat }}
          <div
            class="absolute w-1/5  bg-yellow-400 mx-auto top-0 right-0 left-0"
            style="height: 100px;z-index:-1;"
          ></div>
        </div>
        <div
          class="p-2 bg-green-400 rounded-full mr-2 w-1/3 text-center"
          v-if="status === 'vaccinated'"
        >
          {{ dateFormat }}
          <div
            class="absolute w-1/5  bg-green-400 mx-auto top-0 right-0 left-0"
            style="height: 100px;z-index:-1;"
          ></div>
        </div>
        <div
          class="p-2 bg-red-400 rounded-full mr-2 w-1/3 text-center relative"
          v-if="status === 'overdue'"
        >
          {{ dateFormat }}
          <div
            class="absolute w-1/5  bg-red-400 mx-auto top-0 right-0 left-0"
            style="height: 100px;z-index:-1;"
          ></div>
        </div>
        <div style="width: 80%">
          <!-- <p class="text-sm text-gray-600">{{ note }}</p> -->
          <ul v-if="vaccines">
            <li v-for="value in vaccines" :key="value" class="text-md">
              {{ value }}
            </li>
          </ul>
          <ul v-if="vaccine">
            <li class="text-md">{{ vaccine }}</li>
          </ul>
          <p class="text-xs">{{ childname }}</p>
        </div>
        <div class="text-xs text-gray-600 font-normal text-right w-auto">
          {{ time }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { format } from "date-fns";
import { th } from "date-fns/locale";
export default {
  computed: {
    dateFormat: function() {
      let date = "";
      if (this.$store.state.calendarLocale == "th-TH") {
        date = format(new Date(this.date), "dd MMM yyyy", {
          locale: th,
        });
      }
      return date;
    },
  },
  props: {
    vaccines: {
      type: Array,
      default: function() {
        return [];
      },
    },
    vaccine: {
      type: String,
    },
    date: {
      type: Date,
    },
    status: {
      type: String,
      default: "default",
      validator: function(val) {
        return ["in-progress", "vaccinated", "vaccinating", "overdue"].includes(
          val
        );
      },
    },
    note: {
      type: String,
      default: "Note Information",
    },
    childname: {
      type: String,
      default: "child A",
    },
    time: {
      type: String,
      default: "13:30",
    },
  },
};
</script>
