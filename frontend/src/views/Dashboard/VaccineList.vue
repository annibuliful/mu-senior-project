<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ localeText.vaccineList }}
    </p>
    <!-- Search Area -->
    <div class="mb-3 w-screen">
      <div class="flex justify-between items-center">
        <input
          class="border-gray-600 rounded-lg h-10 ml-4 border mr-2 pl-2 w-8/12"
          type="text"
          v-model="searchQuery"
        />
        <div
          class="text-center border  p-2 rounded-lg mr-2"
          @click="searchVaccine(searchQuery)"
        >
          Search
        </div>
        <div>
          <img
            class="w-6 mr-4"
            src="../../assets/icons/filter.svg"
            alt=""
            @click="onClickFilter"
          />
        </div>
      </div>
      <div v-if="!isFilterShow" class="search-area justify-around mb-3 flex">
        <!-- Filtered by Category -->
        <div class="flex-col w-4/12 p-2 lg:w-3/12">
          <div>{{ localeText.category }}</div>
          <select
            v-model="selectedCategory"
            @change="onSelectedCategory"
            class="w-full border-solid border-2 border-gray-600"
          >
            <option value="children">{{ localeText.children }}</option>
            <option value="adult">{{ localeText.adult }}</option>
          </select>
        </div>
        <!-- Filtered by Sorting -->
        <div class="flex-col w-4/12 p-2 lg:w-3/12">
          <div>{{ localeText.sorting }}</div>
          <select
            v-model="selectedSorting"
            @change="onSelectedSorting"
            class="w-full border-solid border-2 border-gray-600"
          >
            <option value="accen">A-Z</option>
            <option value="deccen">Z-A</option>
          </select>
        </div>
        <!-- Filtered by other -->
        <div class="flex-col w-4/12 p-2 lg:w-3/12">
          <div>{{ localeText.others }}</div>
          <select class="w-full border-solid border-2 border-gray-600">
            <option value="1">1</option>
            <option value="2">2</option>
          </select>
        </div>
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
    VaccineCard,
  },
  created() {
    this.displayVaccineList = this.vaccineList;
    // console.log("displayVaccineList", this.displayVaccineList);
  },
  data() {
    return {
      searchQuery: "",
      displayVaccineList: [],
      isFilterShow: false,
      selectedCategory: "",
      selectedSorting: "",
      selectedType: "",
    };
  },
  computed: {
    vaccineList: function() {
      return this.$store.state.locale.vaccines;
    },
    localeText: function() {
      return this.$store.state.locale;
    },
  },
  methods: {
    searchVaccine(inputSearchQuery) {
      const filteredVaccineList = this.vaccineList.filter((vcObj) => {
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
    onSelectedCategory() {
      const filteredVaccineList = this.vaccineList.filter((vcObj) => {
        return vcObj.category === this.selectedCategory;
      });
      this.displayVaccineList = filteredVaccineList;
    },
    onSelectedSorting() {
      if (this.selectedSorting === "accen") {
        const sorting = (a, b) => {
          const vaccineNameNormalA = a.vaccineNameNormal.toUpperCase();
          const vaccineNameNormalB = b.vaccineNameNormal.toUpperCase();
          let comparison = 0;
          if (vaccineNameNormalA > vaccineNameNormalB) {
            comparison = 1;
          } else if (vaccineNameNormalA < vaccineNameNormalB) {
            comparison = -1;
          }

          return comparison;
        };

        this.displayVaccineList = this.vaccineList.sort(sorting);
      } else if (this.selectedSorting === "deccen") {
        const sorting = (a, b) => {
          const vaccineNameNormalA = a.vaccineNameNormal.toUpperCase();
          const vaccineNameNormalB = b.vaccineNameNormal.toUpperCase();
          let comparison = 0;
          if (vaccineNameNormalA > vaccineNameNormalB) {
            comparison = 1;
          } else if (vaccineNameNormalA < vaccineNameNormalB) {
            comparison = -1;
          }

          return comparison * -1;
        };

        this.displayVaccineList = this.vaccineList.sort(sorting);
      } else {
        // add another sorting
      }
    },
    resetSearch() {
      this.displayVaccineList = this.vaccineList;
      this.searchQuery = "";
    },
    onClickFilter() {
      this.isFilterShow = !this.isFilterShow;
    },
  },
};
</script>
<style scoped></style>
