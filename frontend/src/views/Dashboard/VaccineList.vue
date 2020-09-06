<template>
  <div>
    <!-- <div>{{$store.state.calendarLocale}}</div> -->
    <div class="search-area mb-3 flex justify-center">
      <input
        class="border border-black mr-2"
        type="text"
        v-model="searchQuery"
      />
      <div class="text-center border mr-2" @click="vaccineFilter(searchQuery)">
        Search
      </div>
      <div class="text-center border" @click="resetSearch">
        reset
      </div>
    </div>

    <div v-for="item in displayVaccineList" :key="item.vaccineId">
      <VaccineCard
        :vaccineId="item.vaccineId"
        :vaccineMedicalName="item.vaccineMedicalName"
        :vaccineNameNormal="item.vaccineNameNormal"
        :shortDes="item.shortDes"
      ></VaccineCard>
    </div>
  </div>
</template>
<script>
import VaccineCard from "../../components/VaccineCard";
export default {
  components: {
    VaccineCard
  },
  created() {
    this.displayVaccineList = this.vaccineList;
    // console.log("displayVaccineList", this.displayVaccineList);
  },
  data() {
    return {
      searchQuery: "",
      displayVaccineList: []
    };
  },
  computed: {
    vaccineList: function() {
      return this.$store.state.locale.vaccines;
    }
  },
  methods: {
    vaccineFilter(inputSearchQuery) {
      const filteredVaccineList = this.vaccineList.filter(vcObj => {
        return (
          vcObj.vaccineMedicalName
            .toLowerCase()
            .includes(inputSearchQuery.toLowerCase()) ||
          vcObj.vaccineNameNormal
            .toLowerCase()
            .includes(inputSearchQuery.toLowerCase())
        );
      });
      this.displayVaccineList = filteredVaccineList;
    },
    resetSearch() {
      this.displayVaccineList = this.vaccineList;
      this.searchQuery = "";
    }
  }
};
</script>
<style scoped></style>
