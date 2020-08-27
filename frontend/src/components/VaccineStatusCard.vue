<template>
  <div>
    <!-- <div
      class="card-container border-b-2 border-gray-600 xl:border-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    > -->
    <div
      class="card-container bg-red-500 xl:border-2 mx-auto xl:w-2/3 p-1 flex"
    >
      <div class="flex-col">
        <div class="text-2xl ml-5">{{ vaccineNameMedical }}</div>
        <div class="text-base ml-5 mb-2">{{ vaccineNameNormal }}</div>
      </div>
      <div class="ml-auto">
          <img src="../assets/icons/notvaccine.svg" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    vaccineId: {
      type: String,
      required: true,
    },
    vaccineNameMedical: {
      type: String,
      required: true,
    },
    vaccineNameNormal: {
      type: String,
      required: true,
    },
  },
  methods: {
    // onCardClicked() {
    //   this.$router.push({
    //     path: `/dashboard/vaccine/details/${this.vaccineId}`
    //   });
    // }
  },
};
</script>

<style lang="stylus" scoped></style>
