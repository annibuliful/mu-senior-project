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
          <p>{{ val.vaccineNameNormal }}</p>
          <p>Appointment Date:</p>
          <p>{{ val.appointmentDate | dateFormat }}</p>
        </div>
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block mx-auto mt-8"
      @click="save"
    >
      {{ buttonLabel.save }}
    </button>
  </div>
</template>
<script>
import service from "@/services";
import { format } from "date-fns";
export default {
  computed: {
    suggestionWord: function() {
      return this.$store.state.locale.appointmentSuggestion;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    }
  },
  data: function() {
    return {
      listSuggestions: [],
      childId: "",
      childInfo: {}
    };
  },
  filters: {
    dateFormat: function(val) {
      return format(new Date(val), "dd/MM/yyyy");
    }
  },
  mounted: function() {
    this.$store.commit("listFamilies");
    this.childId = Number(this.$route.params.id);
    const language = this.$store.state.calendarLocale;
    const tempChildInfo = this.$store.state.tempFamily;

    service()
      .suggestion.generate(tempChildInfo, language)
      .then(data => {
        this.listSuggestions = data;
      });
  },
  methods: {
    deleteAppointmentByIndex: function(index) {
      this.listSuggestions.splice(index, 1);
    },
    save: async function() {
      const fullname = this.$store.state.tempFamily.fullname;
      const familyId = await service().family.create(
        this.$store.state.tempFamily
      );
      for (let i = 0; i < this.listSuggestions.length; i++) {
        const {
          vaccineId,
          vaccineNameNormal,
          appointmentDate
        } = this.listSuggestions[i];
        await this.submit(
          vaccineId,
          vaccineNameNormal,
          appointmentDate,
          familyId,
          fullname
        );
      }
      this.$router.push({ name: "dashboard-index" });
    },
    submit: async function(
      vaccineId,
      vaccineName,
      appointmentDate,
      familyId,
      fullname
    ) {
      const data = {
        dates: appointmentDate,
        dot: "gray",
        key: appointmentDate.toString(),
        status: "in-progress",
        customData: {
          selectedVaccines: [vaccineId],
          vaccineId,
          childname: fullname,
          childId: familyId,
          time: "09:30"
        }
      };
      await service().appointment.create(data);
    }
  }
};
</script>
