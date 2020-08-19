<template>
  <div class="mb-20">
    <div class="text-center font-bold text-lg">{{ localeText.title }}</div>

    <div class="vaccine-title-area text-center mb-4">
      <div>{{ vaccineDetails.vaccineNameMedical }}</div>
      <div>{{ vaccineDetails.vaccineNameNormal }}</div>
    </div>

    <div class="border w-10/12 mx-auto">
      <div>{{ vaccineDetails.shortDes }}</div>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-800 w-5/12 text-white font-bold py-2 px-4 rounded-full mx-auto block m-2 focus:outline-none lg:w-3/12"
    >
      {{ localeText.appointmentBtn }}
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-800 w-5/12  text-white font-bold py-2 px-4 rounded-full mx-auto block m-2 focus:outline-none lg:w-3/12"
    >
      {{ localeText.recordBtn }}
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
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccineDetailsPage;
    }
  },
  created() {
    this.$store.commit("getVaccineDetail", this.$route.params.id);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
  }
};
</script>
