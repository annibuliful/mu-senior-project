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
          <img
            :src="`${require('@/assets/icons/close-red.svg')}`"
            @click="deleteAppointmentByIndex(index)"
          />
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
      return format(new Date(val), "MM/dd/yyyy");
    }
  },
  mounted: function() {
    this.$store.commit("listFamilies");
    this.childId = Number(this.$route.params.id);

    service()
      .suggestion.generate(this.childId)
      .then(data => {
        this.listSuggestions = data;
      });
  },
  methods: {
    deleteAppointmentByIndex: function(index) {
      this.listSuggestions.splice(index, 1);
    },
    save: async function() {
      for (let i = 0; i < this.listSuggestions.length; i++) {
        const {
          vaccineId,
          vaccineNameNormal,
          appointmentDate
        } = this.listSuggestions[i];
        await this.submit(vaccineId, vaccineNameNormal, appointmentDate);
      }
    },
    submit: async function(vaccineId, vaccineName, appointmentDate) {
      const { familyId, fullname } = this.$store.state.listFamilies.find(
        el => el.familyId === this.childId
      );
      const data = {
        dates: appointmentDate,
        dot: "red",
        key: appointmentDate.toString(),
        customData: {
          selectedVaccines: [vaccineName],
          vaccineId,
          childname: fullname,
          childId: familyId,
          time: "09:30"
        }
      };
      await service().appointment.create(data);
      this.$router.push({ name: "dashboard-index" });
    }
  }
};
</script>
