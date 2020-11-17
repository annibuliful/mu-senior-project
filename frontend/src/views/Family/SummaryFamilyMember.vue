<template>
  <div class="p-4">
    <!-- <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      Summary
    </p> -->
    <!-- <div>d</div> -->
    <FamilyMemberHeader :childObject="childInfo" />

    <div class="flex flex-row">
      <!-- <div class="ml-auto my-2 mr-2">
        View mode:
      </div>
      <CustomSelect
        class="my-2 mr-2"
        :options="['Status', 'History', 'Roadmap']"
        :default="'Roadmap'"
        @input="test"
        v-model="displayMode"
      /> -->

      <div class="my-4">
        <input
          class="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Keyword"
          v-model="searchKeyword"
          @change="search()"
        />
      </div>
      <!-- <img :src="`${require('@/assets/icons/filter.svg')}`" class="w-4" /> -->
      <div class="inline-block relative my-4">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          v-model="filter"
          @change="search()"
        >
          <!-- <option selected disabled>
            <img :src="`${require('@/assets/icons/filter.svg')}`" />
            Filter
          </option> -->
          <option value="unspecified">Unspecified</option>
          <option value="overdue">Overdue</option>
          <option value="vaccinated">Vaccinated</option>
          <option value="vaccinating">Vaccinating</option>
          <option value="all">All</option>
        </select>
      </div>
      <div class="inline-block relative my-4">
        <select
          class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
          @change="search()"
        >
          <!-- <option selected disabled>
            <img :src="`${require('@/assets/icons/filter.svg')}`" />
            Sort
          </option> -->
          <option value="name">Vaccine Name</option>
          <option value="disease">Disease</option>
          <option value="date">Date</option>
        </select>
      </div>
    </div>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block ml-auto"
      @click="search()"
    >
      Search
    </button>

    <History v-if="displayMode === 'History'" />
    <ImmunityStatus v-if="displayMode === 'Status'" />
    <AppointmentRoadmap v-if="displayMode === 'Roadmapa'" />

    <div
      class="text-xl mb-5 border-b-2 border-blue-700 ml-2"
      style="width: fit-content;"
    >
      {{ labelText.roadmap }}
    </div>

    <AppointmentCard
      v-for="(appointment, index) in appointmentList"
      :childname="appointment.customData.childname"
      :note="appointment.customData.note"
      :time="appointment.customData.time"
      :vaccines="appointment.customData.selectedVaccines"
      :status="appointment.status"
      :key="`${index}-${appointment.customData.childname}`"
    />
  </div>
</template>

<script>
import services from "@/services";
import History from "./HistoryFamilyMember.vue";
import ImmunityStatus from "./Report.vue";
import FamilyMemberHeader from "../../components/FamilyMemberHeaderInfo.vue";
import AppointmentRoadmap from "../Appointment/List-child.vue";
import AppointmentCard from "@/components/AppointmentCard.vue";

// import CustomSelect from "../../components/input/CustomSelect.vue";
export default {
  components: {
    FamilyMemberHeader,
    History,
    ImmunityStatus,
    // CustomSelect,
    AppointmentRoadmap,
    AppointmentCard
  },
  created() {
    this.displayMode = "Roadmap";
    this.childId = Number(this.$route.params.id);
    this.childInfo = this.$store.state.listFamilies.find(
      el => el.familyId === this.childId
    );

    this.$store.commit("listAppointmentByChildId", this.childId);
  },
  data() {
    return {
      childId: "",
      childInfo: {},
      displayMode: "",
      filter: "all",
      sort: "date",
      searchKeyword: ""
    };
  },
  computed: {
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
    test() {
      console.log("SSSSSSS", this.displayMode);
    },
    async search() {
      const data = await services().appointment.search({
        search: this.searchKeyword,
        filter: this.filter,
        sort: this.sort,
        childId: this.childId
      });

      this.$store.commit("setNewAppointmentList", data ?? []);

      console.log(data);
    }
  }
};
</script>
