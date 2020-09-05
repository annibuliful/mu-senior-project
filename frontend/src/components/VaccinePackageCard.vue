<template>
  <div>
    <div
      class="card-container border-b-2 border-gray-600 xl:border-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="text-2xl ml-5">{{ packageTitle }}</div>
      <div class="text-base ml-5 mb-2">{{ packageSubTitle }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    packageId: {
      type: String,
      required: true
    },
     packageTitle: {
      type: String,
      required: true
    },
    packageSubTitle: {
      type: String,
      required: false
    },
  },
  methods: {
    onCardClicked() {
      // alert("test clicking card id : " +this.vaccineId)
      this.$router.push({
        path: `/dashboard/vaccinepackager/details/${this.packageId}`
      });
    }
  }
};
</script>

<style lang="stylus" scoped></style>
