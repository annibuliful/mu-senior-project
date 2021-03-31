<template>
  <div class="p-4">
    <FamilyMemberHeader
      :childObject="childInfo"
      :isSuggestion="isNeedSuggestion"
      v-on:create-suggestion="onClickToSuggestion"
    />

    <div class="text-xl mb-5 ml-2 flex flex-row justify-center">
      <div :class="classRoadmapLine" @click="changeToRoadMap" class="mr-4">
        {{ labelText.roadmap }}
      </div>
      <div :class="classHistoryLine" @click="changeToHistory">
        {{ labelText.history }}
      </div>
    </div>
    <History v-if="displayMode === 'History'" />
    <div v-if="displayMode === 'Roadmap'">
      <div class="flex flex-row mt-4 mb-4">
        <!-- input area start-->
        <div
          class="flex justify-center items-center md:w-full md:justify-center  mx-auto"
        >
          <input
            class="border-gray-600 rounded-lg h-10 ml-4 border mr-2 pl-2 w-8/12 md:w-6/12"
            id="username"
            type="text"
            :placeholder="labelText.placeHolderSearch"
            v-model="searchKeyword"
            @change="search()"
          />
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block "
            @click="search()"
          >
            {{ localeText.button.search }}
          </button>
          <div>
            <img
              class="w-6 ml-2 cursor-pointer"
              src="../../assets/icons/filter.svg"
              alt=""
              @click="onClickFilter"
            />
          </div>
        </div>

        <div class="my-4"></div>
      </div>
      <!-- input area end -->

      <div
        class=" justify-around mb-3 flex md:w-10/12 md:justify-center md:mx-auto"
        v-if="isFilterShow"
      >
        <div class="flex-col w-5/12 p-2 lg:w-3/12">
          <div>{{ labelText.filterBy }}</div>
          <select
            class="w-full border-solid border border-gray-600 h-10  rounded-lg cursor-pointer"
            v-model="filter"
            @change="search()"
          >
            <option value="unspecified">{{ labelText.unspecified }}</option>
            <option value="overdue">{{ labelText.overdue }}</option>
            <option value="vaccinated">{{ labelText.vaccinated }}</option>
            <option value="vaccinating">{{ labelText.vaccinating }}</option>
            <option value="all">{{ labelText.all }}</option>
          </select>
        </div>
        <div class="flex-col w-5/12 p-2 lg:w-3/12">
          <div>{{ labelText.sortBy }}</div>
          <select
            class="w-full border-solid border border-gray-600 h-10  rounded-lg cursor-pointer"
            v-model="sort"
            @change="search()"
          >
            <option value="name">{{ labelText.vaccineName }}</option>
            <!-- <option value="disease">{{ labelText.diseaseName }}</option> -->
            <option value="date">{{ labelText.date }}</option>
          </select>
        </div>
      </div>

      <button
        v-if="isNeedSuggestion"
        @click="onClickToSuggestion"
        class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded "
      >
        {{ labelText.suggestedPlan }}
      </button>

      <AppointmentCard
        v-for="(appointment, index) in appointmentList"
        :childname="appointment.customData.childname"
        :note="appointment.customData.note"
        :time="appointment.customData.time"
        :vaccines="appointment.customData.selectedVaccines.map(el => el.tag)"
        :status="appointment.status"
        :key="`${index}-${appointment.customData.childname}`"
        :date="appointment.dates"
        :sortBy="sort"
        :doseNumber="appointment.customData.doseNumber"
      />

      <!-- <RecordForm
        :doseNumber="`1`"
        :vaccineId="`1`"
        :childId="`1`"
        :appointmentId="`1`"
        :recordId="`1`"
        :vaccineName="`aaaaaa`"
        :receiveDate="new Date()"
        v-on:on-record="onToggleEditAppointment"
        v-on:on-save="onSaveAppointment"
      /> -->
    </div>
  </div>
</template>

<script>
import services from "@/services";
import History from "./HistoryFamilyMember.vue";
import FamilyMemberHeader from "../../components/FamilyMemberHeaderInfo.vue";
import AppointmentCard from "@/components/AppointMentCardTimeLine.vue";
// import RecordForm from "@/components/RecordForm.vue";

export default {
  components: {
    FamilyMemberHeader,
    History,
    AppointmentCard
    // RecordForm,
  },
  async created() {
    this.displayMode = "Roadmap";
    this.classRoadmapLine = "border-b-2 border-blue-700";
    services()
      .appointment.cronCheckStatus()
      .then(async () => {
        const language = this.$store.state.calendarLanguage;
        this.childId = Number(this.$route.params.id);
        this.childInfo = this.$store.state.listFamilies.find(
          el => el.familyId === this.childId
        );

        const listAppointments = await services().appointment.listByChildId(
          this.childId,
          language
        );
        if (listAppointments.length === 0) {
          this.isNeedSuggestion = true;
        }

        this.$store.commit("listAppointmentByChildId", this.childId);
      });
  },

  mounted() {
    //  Very Stupid Hard Code FIXXXXXXXXXXX By Lordbenz If you don't want this just fix it (Problem with color not change when record)
    this.changeToHistory();
    this.changeToRoadMap();
  },

  data() {
    return {
      childId: "",
      childInfo: {},
      displayMode: "",
      filter: "all",
      sort: "date",
      searchKeyword: "",
      isFilterShow: false,
      isNeedSuggestion: false,
      classHistoryLine: "",
      classRoadmapLine: ""
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale;
    },
    labelText() {
      return this.$store.state.locale.label;
    },
    listRecords() {
      return this.$store.state.listRecords;
    },
    vaccineList() {
      return this.$store.state.locale.vaccines;
    },
    appointmentList() {
      return this.$store.state.appointmentList;
    }
  },
  methods: {
    onToggleEditAppointment(value) {
      console.log("toggle-appointment", value);
    },
    onSaveAppointment(value) {
      console.log("save-apointment", value);
    },
    onClickToSuggestion() {
      this.$store.commit("setTempFamilyInfo", {
        ...this.childInfo,
        isUpdated: true
      });
      this.$router.push({
        name: "appointment-child-suggestion"
      });
    },
    onClickFilter() {
      this.isFilterShow = !this.isFilterShow;
    },
    changeToHistory() {
      this.displayMode = "History";
      this.classRoadmapLine = "";
      this.classHistoryLine = "border-b-2 border-blue-700";
    },
    changeToRoadMap() {
      this.displayMode = "Roadmap";
      this.classRoadmapLine = "border-b-2 border-blue-700";
      this.classHistoryLine = "";
    },
    async search() {
      const language = this.$store.state.calendarLocale;

      const data = await services().appointment.search(
        {
          search: this.searchKeyword,
          filter: this.filter,
          sort: this.sort,
          childId: this.childId
        },
        language
      );

      this.$store.commit("setNewAppointmentList", data ?? []);
    }
  }
};
</script>
