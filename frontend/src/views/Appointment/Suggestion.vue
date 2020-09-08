<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700 pl-4">
      {{ suggestionWord }}
    </p>
    <div class="flex flex-col justify-items-center">
      <div
        class="border-b-2 border-black-400 px-4 py-2 flex"
        v-for="(val, index) in listSuggestions"
        :key="`${index}`"
      >
        <div class="grid grid-cols-2 w-11/12 lg:w-2/4">
          <p>Vaccine Name:</p>
          <p>{{ val.vaccineMedicalName }}</p>
          <p>Appointment Date:</p>
          <p>{{ val.appointmentDate | dateFormat }}</p>
        </div>
        <div>
          asdsa
        </div>
      </div>
    </div>
    <button></button>
  </div>
</template>
<script>
import service from "@/services";
import { format } from "date-fns";
export default {
  computed: {
    suggestionWord: function() {
      return this.$store.state.locale.appointmentSuggestion;
    }
  },
  data: function() {
    return {
      listSuggestions: []
    };
  },
  filters: {
    dateFormat: function(val) {
      return format(new Date(val), "MM/dd/yyyy");
    }
  },
  mounted: function() {
    const childId = this.$route.params.id;
    service()
      .suggestion.generate(childId)
      .then(data => {
        this.listSuggestions = data;
      });
  }
};
</script>
