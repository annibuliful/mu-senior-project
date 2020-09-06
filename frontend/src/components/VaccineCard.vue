<template>
  <div>
    <div
      class="card-container border-b-2 border-gray-600 xl:border-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="text-2xl ml-5">{{ vaccineMedicalName }}</div>
      <div class="text-base ml-5 mb-2">{{ vaccineNameNormal }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    vaccineId: {
      type: String,
      required: true
    },
    vaccineMedicalName: {
      type: String,
      required: true
    },
    vaccineNameNormal: {
      type: String,
      required: true
    },
    shortDes: {
      type: String,
      required: false
    }
  },
  methods: {
    onCardClicked() {
      // alert("test clicking card id : " +this.vaccineId)
      this.$router.push({
        path: `/dashboard/vaccine/details/${this.vaccineId}`
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
