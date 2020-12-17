<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ localeText.vaccineList }}
    </p>
    <!-- Search Area -->
    <div class="mb-3 w-full md:w-10/12 md:mx-auto">
      <div
        class="flex justify-between items-center  md:w-full md:justify-center"
      >
        <input
          class="border-gray-600 rounded-lg h-10 ml-4 border mr-2 pl-2 w-8/12 md:w-6/12"
          type="text"
          v-model="searchQuery"
          @change="searchVaccine"
        />
        <div
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block "
          @click="searchVaccine"
        >
          Search
        </div>
        <div>
          <img
            class="w-6 ml-2 mr-2 cursor-pointer"
            src="../../assets/icons/filter.svg"
            alt=""
            @click="onClickFilter"
          />
        </div>
      </div>
      <div
        v-if="isFilterShow"
        class="search-area justify-around mb-3 flex md:w-10/12 md:justify-center md:mx-auto"
      >
        <!-- Filtered by Category -->
        <div class="flex-col w-5/12 p-2 lg:w-3/12">
          <div>{{ localeText.category }}</div>
          <select
            v-model="selectedCategory"
            @change="onSelectedCategory"
            class="w-full border-solid border border-gray-600 h-10  rounded-lg cursor-pointer"
          >
            <option value="children">{{ localeText.children }}</option>
            <option value="adult">{{ localeText.adult }}</option>
          </select>
        </div>
        <!-- Filtered by Sorting -->
        <div class="flex-col w-5/12 p-2 lg:w-3/12">
          <div>{{ localeText.ordering }}</div>
          <select
            v-model="selectedSorting"
            @change="onSelectedSorting"
            class="w-full border-solid border border-gray-600 h-10  rounded-lg cursor-pointer"
          >
            <option value="accen">A-Z</option>
            <option value="deccen">Z-A</option>
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
    searchVaccine() {
      const filteredVaccineList = this.vaccineList.filter((vcObj) => {
        return (
          vcObj.vaccineMedicalName
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase()) ||
          vcObj.vaccineNameNormal
            .toLowerCase()
            .includes(this.searchQuery.toLowerCase())
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
