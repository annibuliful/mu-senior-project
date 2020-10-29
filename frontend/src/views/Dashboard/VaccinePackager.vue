<template>
  <div>
    <div>
      <div
        class="text-2xl mb-10 border-b-2 border-blue-700"
        style="width: auto;"
      >
        {{ localeText.title }}
      </div>

      <div v-for="item in displayedPackagerList" :key="item.packageId">
        <!-- {{ item.packageId }} -->
        <VaccinePackageCard :packageId="item.packageId"></VaccinePackageCard>
        <!-- <AchivementStatusCard
          v-for="vc in item.packageVaccine"
          :key="vc"
          :vaccineId="vc"
          :childId="childId"
        ></AchivementStatusCard> -->
      </div>
    </div>
  </div>
</template>
<script>
import VaccinePackageCard from "../../components/VaccinePackageCard";
// import AchivementStatusCard from "../../components/AchivementStatusCard.vue";

export default {
  components: {
    VaccinePackageCard
    // AchivementStatusCard,
  },
  created() {
    this.displayedPackagerList = this.packageList;
  },
  data() {
    return {
      displayedPackagerList: [],
      childId: 1
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccinePackagerPage;
    },
    packageList: function() {
      return this.$store.state.locale.packagers;
    }
  },
  methods: {}
};
</script>
<style scoped></style>
