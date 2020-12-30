<template>
  <div class="border-b">
    <div class="overflow-hidden block mx-auto w-full lg:w-4/5">
      <div class="px-4 flex mb-2 items-center mt-2">
        <div
          class=" p-2 bg-gray-400 rounded-full mr-2 w-1/3 text-center"
          v-if="status === 'in-progress'"
        >
          {{ dateFormat }}
        </div>
        <div
          class="p-2 bg-yellow-400 rounded-full mr-2 w-1/3 text-center"
          v-if="status === 'vaccinating'"
        >
          {{ dateFormat }}
        </div>
        <div
          class="p-2 bg-green-400 rounded-full mr-2 w-1/2 text-center"
          v-if="status === 'vaccinated'"
        >
          {{ dateFormat }}
        </div>
        <div
          class="p-2 bg-red-400 rounded-full mr-2 w-1/2 text-center"
          v-if="status === 'overdue'"
        >
          {{ dateFormat }}
        </div>
        <div style="width: 80%">
          <p class="text-md">{{ childname }}</p>
          <!-- <p class="text-sm text-gray-600">{{ note }}</p> -->
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
import { format } from "date-fns";
import { en, th } from "date-fns/locale";
export default {
  computed: {
    dateFormat: function() {
      let date = "";
      console.log("calendarLocale", this.$store.state.calendarLocale);
      if (this.$store.state.calendarLocale == "en-US") {
        date = format(new Date(this.date), "dd MMM yyyy", {
          locale: en
        });
      } else {
        date = format(new Date(this.date), "dd MMM yyyy", {
          locale: th
        });
      }
      console.log("Dateeeeeeeeeeeee:", date);
      return date;
    }
  },
  props: {
    vaccines: {
      type: Array,
      default: function() {
        return [];
      }
    },
    date: {
      type: Date
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
