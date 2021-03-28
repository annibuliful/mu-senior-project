<template>
  <div class="w-full">
    <p class="text-2xl mb-10 border-b-2 border-blue-700 pl-4">
      {{ suggestionWord }}
    </p>
    <div class="flex flex-col justify-items-center">
      <div
        v-for="(val, index) in listSuggestions"
        :key="`${index}`"
        class="md:w-1/2 lg:w-4/5 w-11/12 mx-auto mt-4"
      >
        <AppointmentCard
          :vaccineName="val.vaccineName"
          :listAppointmentDates="val.listAppointmentDates"
          :vaccineId="val.vaccineId"
        />
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
import service from "../../services";
import { format } from "date-fns";
import AppointmentCard from "../../components/NewAppointmentCard";

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
      listOverdueVaccines: [],
      mockListSuggestion: [
        {
          vaccineId: "vac001",
          vaccineName: "Test-Name",
          listAppointmentDates: [new Date(), new Date(), new Date()]
        },
        {
          vaccineId: "vac001",
          vaccineName: "Test-Name",
          listAppointmentDates: [new Date(), new Date(), new Date()]
        }
      ]
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

    const suggestionData = {
      receivedVaccineIds: tempChildInfo.diseases,
      birthDate: tempChildInfo.birthDate,
      congenitalDiseaseIds: []
    };
    service()
      .suggestion.suggestion(suggestionData, language)
      .then(listVaccine => {
        console.log("data", listVaccine);
        this.listSuggestions = listVaccine.map(vaccine => {
          return {
            vaccineId: vaccine.vaccineId,
            vaccineName: vaccine.vaccineNameNormal,
            listAppointmentDates: vaccine.listAllDosesWithTime.map(
              ({ appointmentDate }) => appointmentDate
            )
          };
        });
      });
    // service()
    //   .suggestion.generate(tempChildInfo, language)
    //   .then(data => {
    //     this.listSuggestions = data;
    //     const listOverdueVaccines = data.filter(el =>
    //       isBefore(el.appointmentDate, new Date())
    //     );
    //     this.listOverdueVaccines = listOverdueVaccines;
    //   });

    console.log("listSuggestions", this.listSuggestions);
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
          // vaccineName,
          listAppointmentDates
        } = this.listSuggestions[i];

        for (let j = 0; j < listAppointmentDates.length; j++) {
          await this.submit(
            vaccineId,
            listAppointmentDates[j],
            familyId,
            fullname,
            j + 1
          );
        }

        // if (isBefore(listAppointmentDates[0], new Date(), 2)) {
        //   listOverdue.push({
        //     vaccineId,
        //     vaccineName,
        //     listAppointmentDates,
        //     familyId,
        //     fullname,
        //     eventId
        //   });
        // }
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
    submit: async function(
      vaccineId,
      appointmentDate,
      familyId,
      fullname,
      doseNumber
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
          time: "09:30",
          doseNumber
        }
      };
      return await service().appointment.create(data);
    }
  }
};
</script>
