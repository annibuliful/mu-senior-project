<template>
  <div class="w-full">
    <!-- <Modal
      :isActive="activeModal"
      v-on:close="onCloseModal"
      :title="locale.modalSuggest"
    >
    </Modal> -->
    <p class="text-2xl mb-10 border-b-2 border-blue-700 pl-4">
      {{ suggestionWord }}
    </p>
    <div class="flex flex-col justify-items-center mb-8">
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
      class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded block mt-8 fixed bottom-0 mb-2  mx-auto w-full md:w-4/12"
      @click="save"
      style="margin: 2% auto;left: 0; right: 0;"
      v-if="!isLoading"
    >
      {{ buttonLabel.save }}
    </button>

    <button
      v-if="isLoading"
      type="button"
      style="margin: 2% auto;left: 0; right: 0;"
      class="inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium fixed bottom-0 mb-2 rounded-md text-white bg-orange-500 hover:bg-orange-700 hover:bg-rose-500 focus:border-rose-700 active:bg-rose-700 transition ease-in-out duration-150 cursor-not-allowed"
      disabled
    >
      <svg
        class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        ></circle>
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        ></path>
      </svg>
      {{ buttonLabel.loading }}
    </button>
  </div>
</template>
<script>
import service from "../../services";
import { format } from "date-fns";
import AppointmentCard from "../../components/NewAppointmentCard";
// import Modal from "@/components/common/Modal.vue";

export default {
  components: {
    AppointmentCard,
    // Modal,
  },
  computed: {
    suggestionWord: function() {
      return this.$store.state.locale.appointmentSuggestion;
    },
    buttonLabel() {
      return this.$store.state.locale.button;
    },
    locale() {
      return this.$store.state.locale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
  },
  data: function() {
    return {
      isLoading: false,
      activeModal: true,
      listSuggestions: [],
      countListSuggestion: 0,
      currentSaveAppointment: 0,
      childId: "",
      childInfo: {},
      childname: "",
      listOverdueVaccines: [],
      mockListSuggestion: [
        {
          vaccineId: "vac001",
          vaccineName: "Test-Name",
          listAppointmentDates: [new Date(), new Date(), new Date()],
        },
        {
          vaccineId: "vac001",
          vaccineName: "Test-Name",
          listAppointmentDates: [new Date(), new Date(), new Date()],
        },
      ],
    };
  },
  filters: {
    dateFormat: function(val) {
      return format(new Date(val), "dd/MM/yyyy");
    },
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
      congenitalDiseaseIds: [],
    };
    service()
      .suggestion.suggestion(suggestionData, language)
      .then((listVaccine) => {
        console.log("data", listVaccine);
        this.listSuggestions = listVaccine.map((vaccine) => {
          return {
            vaccineId: vaccine.vaccineId,
            vaccineName: vaccine.vaccineNameNormal,
            listAppointmentDates: vaccine.listAllDosesWithTime.map(
              ({ appointmentDate }) => appointmentDate
            ),
          };
        });
        this.countListSuggestion = this.listSuggestions.length;
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
    onCloseModal() {
      this.activeModal = false;
    },
    deleteAppointmentByIndex: function(index) {
      this.listSuggestions.splice(index, 1);
    },
    save: async function() {
      this.isLoading = true;
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
          userId,
        });
      }

      const fullname = this.$store.state.tempFamily.fullname;
      for (let i = 0; i < this.listSuggestions.length; i++) {
        const {
          vaccineId,
          // vaccineName,
          listAppointmentDates,
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
          familyId,
        };
        this.$store.commit("setfamilyInfoForOverdueVaccines", childInfo);
        this.$store.commit("setlistOverdueVaccines", listOverdue);
        this.$router.push({ name: "Old-Vaccine" });
      }
      this.isLoading = false;
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
          doseNumber,
        },
      };
      return await service().appointment.create(data, this.calendarLocale);
    },
  },
};
</script>
