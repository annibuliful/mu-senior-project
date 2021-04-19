<template>
  <div>
    <div class="text-blue-800 p-2 font-bold text-center text-lg lg:text-xl">
      {{ packagerDetails.packageTitle }}
    </div>
    <div class="p-2  text-center ">
      {{ packagerDetails.packageDesc }}
    </div>

    <div class="flex flex-col w-full">
      <div
        class="flex flex-row flex-wrap justify-center"
        v-if="listFamilies != null"
      >
        <div
          v-for="(family, index) in listFamilies"
          :key="`${family.fullname}-${index}`"
          class="bg-gray-100 mt-2 mb-2 rounded-md border-2 "
        >
          <div
            class="text-white bg-gray-900 p-2 font-bold text-center text-lg lg:text-xl"
          >
            <div>{{ localeText.packageMember }}</div>
            <div>{{ family.fullname }}</div>
          </div>
          <div v-for="vc in packagerDetails.packageVaccine" :key="vc">
            <AchivementStatusCard :childId="family.familyId" :vaccineId="vc" />
          </div>
        </div>
        <!-- <div
          v-for="item in packagerDetails.packageVaccine"
          :key="item"
          class=""
        >
          <AchivementStatusCard
            :childId="childInfo.familyId"
            :vaccineId="item"
          ></AchivementStatusCard>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import AchivementStatusCard from "../../components/AchivementStatusCard.vue";
export default {
  components: { AchivementStatusCard },
  data() {
    return {
      packagerDetails: {},
      recordTo: "",
      childInfo: ""
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.recordVaccinePage;
    },
    calendarLocale() {
      return this.$store.state.calendarLocale;
    },
    listFamilies() {
      return this.$store.state.listFamilies;
    },
    label() {
      return this.$store.state.locale.labelAddAppointment;
    }
  },
  methods: {
    getChildInfo() {
      this.childInfo = this.listFamilies.find(
        x => x.fullname === this.recordTo
      );
    }
  },

  created() {
    this.$store.commit("listFamilies");
    this.$store.commit("getPackagerDetail", this.$route.params.id);
    this.packagerDetails = this.$store.state.selectedPackagerDetails;
    this.listOfVaccineInPackage = this.packagerDetails.vaccineInPackage;
    if (this.listFamilies != null) {
      this.recordTo = this.listFamilies[0].fullname;
    }
  }
};
</script>
