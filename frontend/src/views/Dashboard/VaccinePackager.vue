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
        <VaccinePackageCard
          :packageId="item.packageId"
          :packageTitle="item.packageTitle"
          :packageSubTitle="item.packageSubTitle"
        ></VaccinePackageCard>
      </div>
    </div>
  </div>
</template>
<script>
import VaccinePackageCard from "../../components/VaccinePackageCard";
export default {
  components: {
    VaccinePackageCard,
  },
  created() {
    this.displayedPackagerList = this.packageList;
  },
  data() {
    return {
      displayedPackagerList: [],
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccinePackagerPage;
    },
    packageList: function() {
      return this.$store.state.locale.packager;
    },
  },
  methods: {},
};
</script>
<style scoped></style>
