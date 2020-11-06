<template>
  <div>
    <!-- <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      Summary
    </p> -->
    <!-- <div>d</div> -->
    <FamilyMemberHeader :childObject="childInfo" />

    <div class="flex flex-row">
      <div class="ml-auto my-2 mr-2">
        View mode:
      </div>
      <CustomSelect
        class="my-2 mr-2"
        :options="['Status', 'History', 'Roadmap']"
        :default="'Roadmap'"
        @input="test"
        v-model="displayMode"
      />
    </div>

    <History v-if="displayMode === 'History'" />
    <ImmunityStatus v-if="displayMode === 'Status'" />
    <AppointmentRoadmap v-if="displayMode === 'Roadmap'" />
  </div>
</template>

<script>
// import service from "@/services";
import History from "./HistoryFamilyMember.vue";
import ImmunityStatus from "./Report.vue";
import FamilyMemberHeader from "../../components/FamilyMemberHeaderInfo.vue";
import AppointmentRoadmap from "../Appointment/List-child.vue";
import CustomSelect from "../../components/input/CustomSelect.vue";
export default {
  components: {
    FamilyMemberHeader,
    History,
    ImmunityStatus,
    CustomSelect,
    AppointmentRoadmap
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
      displayMode: ""
    };
  },
  computed: {
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
    }
  }
};
</script>
