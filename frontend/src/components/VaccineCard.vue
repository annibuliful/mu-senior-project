<template>
  <div>
    <div class="card-container border-b-2 border-gray-600 xl:border-8" @click="onCardClicked">
      <div class="text-2xl ml-5">{{ vaccineNameMedical }}</div>
      <div class="text-base ml-5 mb-2">{{ vaccineNameNormal }}</div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    console.log("WOWOWOWOWOWO I'm Created");
  },
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
    shortDes: {
      type: String,
      required: true,
    },
  },
   methods: {
      onCardClicked() {
      alert("test clicking card id : " +this.vaccineId)
    },
   }
};
</script>

<style lang="stylus" scoped>

</style>