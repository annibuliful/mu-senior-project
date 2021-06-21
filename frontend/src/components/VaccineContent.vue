<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ localeText.title }}
    </p>
    <img
      class="p-2 w-4/12 lg:w-48 mx-auto"
      :src="require(`../assets/vaccine-img/${vaccineDetails.vaccineId}.png`)"
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

      <div
        class="lg:text-center lg:w-10/12 mx-auto mt-8 text-blue-800"
        v-if="
          vaccineDetails.vaccineId === 'vac027' ||
            vaccineDetails.vaccineId === 'vac026'
        "
      >
        {{ localeText.vaccineReference2 }}
      </div>
      <div class="lg:text-center lg:w-10/12 mx-auto mt-8 text-blue-800" v-else>
        {{ localeText.vaccineReference }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["vaccineDetails"],
  computed: {
    localeText: function() {
      return this.$store.state.locale.vaccineDetailsPage;
    }
  }
};
</script>
