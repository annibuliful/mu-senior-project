<template>
  <div>
    <div
      class="text-xl mb-5 border-b-2 border-blue-700 ml-2"
      style="width: fit-content;"
    >
      {{ labelText.reporttitle }}
    </div>

    <div class="flex flex-col">
      <div class="flex flex-row flex-wrap justify-center w-full">
        <!-- <AchivementStatusCard :achivementType="'baby'"></AchivementStatusCard> -->
      </div>
      <div
        v-for="appointment in appointmentList"
        :key="`${appointment.appointmentId}`"
      >
        <AchivementStatusCard
          :vaccineId="appointment.customData.vaccineId"
          :childId="childId"
        ></AchivementStatusCard>
        <!-- {{ appointment.customData.selectedVaccines[0] }} -->
      </div>
      <!-- <div
        v-for="(receivedVaccine, index) in childInfo.receivedVaccines"
        :key="`${receivedVaccine}-${index}`"
      >
        {{ receivedVaccine }}
      </div> -->

      <!-- <div>
        childInfo
      </div> -->
    </div>
  </div>
</template>

<script>
// import service from "@/services";
import AchivementStatusCard from "../../components/AchivementStatusCard.vue";
export default {
  components: {
    AchivementStatusCard
  },
  created() {
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
      displayedListRecord: [],
      isModalVisible: false,
      selectedVaccineId: "",
      listOfType: ["birth", "baby", "kid", "teen"]
      // listOfAppointMent,
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
    },
    labelText() {
      return this.$store.state.locale.label;
    }
  },
  methods: {}
};
</script>
