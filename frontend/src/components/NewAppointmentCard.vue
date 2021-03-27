<template>
  <div
    class="shadow-sm border-gray-500 border p-4 rounded flex flex-col md:flex-row lg:flex-row items-center border-dashed"
  >
    <div class="w-full md:w-4/12 lg:w-4/12">
      <img
        class="p-2 w-24 h-24 lg:w-48 lg:h-48 block mx-auto"
        :src="require(`../assets/vaccine-img/${vaccineId}.png`)"
        alt=""
      />
      <p class="text-center text-xl ">{{ vaccineName }}</p>
    </div>
    <div class="w-full md:w-7/12 lg:w-7/12">
      <div
        v-for="(appointmentDate, index) in listAppointmentDates"
        :key="`${index}`"
        class="ml-4 my-4 mx-auto"
      >
        {{ dateFormat(appointmentDate) }}
        <span class="text-gray-500 block md:inline-block lg:inline-block"
          >( Dose number: {{ index + 1 }})</span
        >
      </div>
    </div>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
export default {
  props: {
    vaccineId: {
      type: String,
      required: true
    },
    vaccineName: {
      type: String,
      required: true
    },
    listAppointmentDates: {
      type: Array,
      required: true
    }
  },
  methods: {
    dateFormat: function(dateValue) {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(addYears(new Date(dateValue), 543), "dd MMM yyyy", {
          locale: th
        });
      } else {
        date = format(new Date(dateValue), "dd MMM yyyy");
      }
      return date;
    }
  }
};
</script>
