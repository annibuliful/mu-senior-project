<template>
  <div>
    <div class="px-4 py-2 shadow-md">
      <div class="flex flex-row w-full">
        <img
          v-if="recordObject.recordImage"
          :src="recordObject.recordImage"
          class="w-3/12 h-24 my-auto "
        />
        <!-- <div class="w-3/12  px-2"></div> -->
        <div class="w-9/12 px-2 text-sm my-auto">
          <div>
            <span class="font-bold text-blue-800"
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
            {{ recordObject.receivingDate | receivingDateFormat }}
          </div>
        </div>
      </div>
      <!-- recordObject.selectedVaccines[0].tag because there is only 1 vaccine per 1 record -->
    </div>
  </div>
</template>
<script>
import format from "date-fns/format";
export default {
  filters: {
    receivingDateFormat: function(value) {
      return format(new Date(value), "dd-MM-yyyy");
    },
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.historyPage;
    },
  },
  props: {
    recordObject: {
      type: Object,
      required: true,
    },
  },
};
</script>
