<template>
  <div class="mb-20">
    <div class="text-center font-bold text-xl lg:text-2xl text-blue-800">
      {{ localeText.title }}
    </div>

    <div class="vaccine-title-area text-center mb-4 text-lg lg:text-xl">
      <div>{{ vaccineDetails.vaccineNameMedical }}</div>
      <div>{{ vaccineDetails.vaccineNameNormal }}</div>
    </div>

    <div class="border w-10/12 mx-auto p-5 shadow-lg">
      <div class=" text-blue-800 p-2 font-bold text-center text-lg lg:text-xl ">
        {{ localeText.who }}
      </div>
      <div>{{ vaccineDetails.shortDes }}</div>
      <div class="mt-8 text-blue-800">{{ localeText.vaccineReference }}</div>
    </div>

    <button
      class="bg-blue-500 hover:bg-blue-800 w-8/12 text-white font-bold py-2 px-4 rounded-full mx-auto block m-2 focus:outline-none lg:w-4/12"
    >
      {{ localeText.appointmentBtn }}
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-800 w-8/12 text-white font-bold py-2 px-4 rounded-full mx-auto block m-2 focus:outline-none lg:w-4/12"
    >
      {{ localeText.recordBtn }}
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      vaccineDetails: {},
    };
  },
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccineDetailsPage;
    },
  },
  created() {
    this.$store.commit("getVaccineDetail", this.$route.params.id);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
  },
};
</script>
