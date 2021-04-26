<template>
  <div class="w-full z-50 border shadow-md mr-2 my-2 p-2">
    <div>{{ dateFormat }}</div>

    <div class="text-sm">{{ appointment.customData.selectedVaccines[0] }}</div>
    <div class="text-sm">
      <span>{{ localeText.label.doseTimes }}</span>
      <span>: {{ appointment.customData.doseNumber }}</span>
    </div>

    <div class="text-sm">({{ appointment.customData.childname }})</div>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
export default {
  computed: {
    dateFormat: function() {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(
          addYears(new Date(this.appointment.dates), 543),
          "dd MMM yyyy",
          {
            locale: th
          }
        );
      } else {
        date = format(new Date(this.appointment.dates), "dd MMM yyyy");
      }
      return date;
    },
    localeText() {
      return this.$store.state.locale;
    }
  },
  props: {
    appointment: {
      type: Object
    }
  }
};
</script>
