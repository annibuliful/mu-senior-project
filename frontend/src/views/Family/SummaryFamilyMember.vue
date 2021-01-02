<template>
  <div class="p-4">
    <FamilyMemberHeader
      :childObject="childInfo"
      :isSuggestion="isNeedSuggestion"
      v-on:create-suggestion="onClickToSuggestion"
    />
    <!-- <div class="flex flex-row justify-center mt-2">
      <button @click="changeToRoadMap" class="border-2 p-1 mr-2">
        Roadmap
      </button>
      <button @click="changeToHistory" class="border-2 p-1 ">
        History
      </button>
    </div> -->

    <History v-if="displayMode === 'History'" />
    <div v-if="displayMode === 'Roadmap'">
      <div class="flex flex-row mt-4">
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
            @change="search()"
          >
            <option value="name">{{ labelText.vaccineName }}</option>
            <option value="disease">{{ labelText.diseaseName }}</option>
            <option value="date">{{ labelText.date }}</option>
          </select>
        </div>
      </div>

      <div
        class="text-xl mb-5 border-b-2 border-blue-700 ml-2"
        style="width: fit-content;"
      >
        {{ labelText.roadmap }}
      </div>

      <button
        v-if="isNeedSuggestion"
        @click="onClickToSuggestion"
        class="block mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        {{ labelText.suggestedPlan }}
      </button>

      <AppointmentCard
        v-for="(appointment, index) in appointmentList"
        :childname="appointment.customData.childname"
        :note="appointment.customData.note"
        :time="appointment.customData.time"
        :vaccines="appointment.customData.selectedVaccines.map((el) => el.tag)"
        :status="appointment.status"
        :key="`${index}-${appointment.customData.childname}`"
        :date="appointment.dates"
      />
    </div>
  </div>
</template>

<script>
import services from "@/services";
import History from "./HistoryFamilyMember.vue";
// import ImmunityStatus from "./Report.vue";
import FamilyMemberHeader from "../../components/FamilyMemberHeaderInfo.vue";
// import AppointmentRoadmap from "../Appointment/List-child.vue";
import AppointmentCard from "@/components/AppointmentCard.vue";
// Require Esperanto locale
// import { en, th } from "date-fns/esm/locale";
// import CustomSelect from "../../components/input/CustomSelect.vue";
export default {
  components: {
    FamilyMemberHeader,
    History,
    AppointmentCard,
  },
  created() {
    this.displayMode = "Roadmap";
    services()
      .appointment.cronCheckStatus()
      .then(async () => {
        const language = this.$store.state.calendarLanguage;
        this.childId = Number(this.$route.params.id);
        this.childInfo = this.$store.state.listFamilies.find(
          (el) => el.familyId === this.childId
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
    },
  },
  methods: {
    onClickToSuggestion() {
      this.$store.commit("setTempFamilyInfo", {
        ...this.childInfo,
        isUpated: true,
      });
      this.$router.push({
        name: "appointment-child-suggestion",
      });
    },
    onClickFilter() {
      this.isFilterShow = !this.isFilterShow;
    },
    changeToHistory() {
      this.displayMode = "History";
    },
    changeToRoadMap() {
      this.displayMode = "Roadmap";
    },
    async search() {
      const language = this.$store.state.calendarLocale;

      const data = await services().appointment.search(
        {
          search: this.searchKeyword,
          filter: this.filter,
          sort: this.sort,
          childId: this.childId,
        },
        language
      );

      this.$store.commit("setNewAppointmentList", data ?? []);
    },
  },
};
</script>
