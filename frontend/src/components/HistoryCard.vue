<template>
  <div>
    <div class="px-4 py-2 shadow-md lg:text-2xl">
      <div class="flex flex-row w-full ">
        <img
          v-if="isImgExist"
          :src="recordObject.recordImage"
          class="w-3/12 h-22 my-auto md:h-48 "
        />
        <!-- <div class="w-3/12  px-2"></div> -->
        <div class="w-9/12 px-2 my-auto">
          <div class="">
            <span class="font-bold text-blue-800 "
              >{{ localeText.received }}:</span
            >
            {{ recordObject.selectedVaccines[0].tag }}
          </div>
          <div>
            <span class="font-bold ">{{ localeText.hospital }}:</span>
            {{ recordObject.hostpitalName }}
          </div>

          <div>
            <span class="font-bold">{{ localeText.date }}:</span>
            {{ receivingDateFormat }}
          </div>
        </div>
      </div>
      <!-- recordObject.selectedVaccines[0].tag because there is only 1 vaccine per 1 record -->
    </div>
  </div>
</template>
<script>
import { format, addYears } from "date-fns";
import { th } from "date-fns/locale";
export default {
  computed: {
    localeText: function() {
      return this.$store.state.locale.historyPage;
    },
    isImgExist() {
      return this.recordObject.recordImage != undefined;
    },
    receivingDateFormat: function() {
      let date = "";
      if (this.$store.state.calendarLocale === "th-TH") {
        date = format(
          addYears(new Date(this.recordObject.receivingDate), 543),
          "dd MMM yyyy",
          {
            locale: th
          }
        );
      } else {
        date = format(new Date(this.recordObject.receivingDate), "dd MMM yyyy");
      }
      return date;
    }
  },
  props: {
    recordObject: {
      type: Object,
      required: true
    }
  }
};
</script>
