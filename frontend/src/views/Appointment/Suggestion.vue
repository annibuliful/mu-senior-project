<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-orange-700 pl-4">
      {{ suggestionWord }}
    </p>
    <div class="flex flex-col justify-items-center">
      <div v-for="(val, index) in listSuggestions" :key="`${index}`">
        <AppointmentCard
          :childname="childname.fullname"
          :vaccine="val.vaccineNameNormal"
          status="in-progress"
          :date="val.appointmentDate"
          :doseNumber="1"
        />
      </div>
    </div>
    <button
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded block mx-auto mt-8"
      @click="save"
    >
      {{ buttonLabel.save }}
    </button>
  </div>
</template>
<script>
import service from "@/services";
import { format, isBefore } from "date-fns";
import AppointmentCard from "@/components/AppointmentCard.vue";
export default {
  components: {
    AppointmentCard
  },
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
      childInfo: {},
      childname: "",
      listOverdueVaccines: []
    };
  },
  filters: {
    dateFormat: function(val) {
      return format(new Date(val), "dd/MM/yyyy");
    }
  },
  created: function() {
    this.$store.commit("listFamilies");
    this.childId = Number(this.$route.params.id);
    const language = this.$store.state.calendarLocale;
    const tempChildInfo = this.$store.state.tempFamily;
    this.childname = tempChildInfo;
    service()
      .suggestion.generate(tempChildInfo, language)
      .then(data => {
        this.listSuggestions = data;
        const listOverdueVaccines = data.filter(el =>
          isBefore(el.appointmentDate, new Date())
        );
        this.listOverdueVaccines = listOverdueVaccines;
      });

      console.log("listSuggestions",this.listSuggestions)
  },
  methods: {
    deleteAppointmentByIndex: function(index) {
      this.listSuggestions.splice(index, 1);
    },
    save: async function() {
      const listOverdue = [];
      let familyId;
      const isUpdated = this.$store.state.tempFamily.isUpdated;
      if (isUpdated) {
        familyId = this.$store.state.tempFamily.familyId;
      } else {
        const user = localStorage.getItem("userInfo");
        const { userId } = JSON.parse(user);
        familyId = await service().family.create({
          ...this.$store.state.tempFamily,
          userId
        });
      }

      const fullname = this.$store.state.tempFamily.fullname;
      for (let i = 0; i < this.listSuggestions.length; i++) {
        const {
          vaccineId,
          vaccineNameNormal,
          appointmentDate
        } = this.listSuggestions[i];
        const eventId = await this.submit(
          vaccineId,
          appointmentDate,
          familyId,
          fullname
        );
        if (isBefore(appointmentDate, new Date(), 2)) {
          listOverdue.push({
            vaccineId,
            vaccineNameNormal,
            appointmentDate,
            familyId,
            fullname,
            eventId
          });
        }
      }
      const isListOverdueEmpty = listOverdue.length === 0;
      if (isListOverdueEmpty) {
        this.$router.push({ name: "dashboard-index" });
      } else {
        const childInfo = {
          fullname,
          familyId
        };
        this.$store.commit("setfamilyInfoForOverdueVaccines", childInfo);
        this.$store.commit("setlistOverdueVaccines", listOverdue);
        this.$router.push({ name: "Old-Vaccine" });
      }
    },
    submit: async function(vaccineId, appointmentDate, familyId, fullname) {
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
          time: "09:30",
          doseNumber: 1
        }
      };
      return await service().appointment.create(data);
    }
  }
};
</script>
