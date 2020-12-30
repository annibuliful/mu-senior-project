<template>
  <div class="mb-20">
    <img
      :src="require(`../../assets/icons/arrow-left.svg`)"
      alt="left-arrow"
      class="p-2 w-2/12 lg:w-16 cursor-pointer"
      @click="$router.push('/pre-login')"
    />
    <img
      class="p-2 w-4/12 lg:w-48 mx-auto"
      :src="require(`../../assets/vaccine-img/${vaccineDetails.vaccineId}.png`)"
      alt=""
    />

    <div class="vaccine-title-area text-center mb-4 text-lg lg:text-xl">
      <div class="font-bold">
        {{ vaccineDetails.vaccineMedicalName }}
      </div>
      <div>{{ vaccineDetails.vaccineNameNormal }}</div>
    </div>

    <div class="border w-10/12 mx-auto p-5 shadow-lg mb-6">
      <div class=" text-blue-800 p-2 font-bold text-center text-lg lg:text-xl ">
        {{ localeText.description }}
      </div>
      <div
        class="lg:text-center lg:w-10/12 mx-auto"
        v-html="vaccineDetails.shortDes"
      ></div>
      <div class=" text-blue-800 p-2 font-bold text-center text-lg lg:text-xl ">
        {{ localeText.suggestedAge }}
      </div>
      <div
        class="lg:text-center lg:w-10/12 mx-auto"
        v-html="vaccineDetails.displayedSuggestAge"
      ></div>
      <div class=" text-blue-800 p-2 font-bold text-center text-lg lg:text-xl ">
        {{ localeText.warning }}
      </div>
      <div
        class="lg:text-center lg:w-10/12 mx-auto"
        v-html="vaccineDetails.warning"
      ></div>

      <div class="lg:text-center lg:w-10/12 mx-auto mt-8 text-blue-800">
        {{ localeText.vaccineReference }}
      </div>
    </div>
    <button
      @click="onLinkToLogin"
      class="bg-blue-500 hover:bg-blue-800 w-8/12 text-white font-bold py-2 px-4 rounded-full mx-auto block m-2 focus:outline-none lg:w-4/12"
    >
      {{ localeText.login }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vaccineDetails: {}
    };
  },
  methods: {
    onLinkToLogin() {
      this.$router.push("/");
    },
    commitBaseRecord() {
      const data = {
        vaccineName: this.vaccineDetails.vaccineNameNormal,
        vaccineId: this.vaccineDetails.vaccineId,
        selectedVaccines: [this.vaccineDetails.vaccineNameNormal]
      };
      this.$store.commit("setBaseRecordVaccine", data);
    }
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale;
    }
  },
  created() {
    this.$store.commit("getVaccineDetail", this.$route.params.id);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
  }
};
</script>
