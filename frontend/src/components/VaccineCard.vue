<template>
  <div>
    <div
      class="card-container mt-2 shadow-md p-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="flex flex-row">
        <img
          class="p-2 w-24 h-24 lg:w-48 lg:h-48"
          :src="require(`../assets/vaccine-img/${vaccineId}.png`)"
          alt=""
        />
        <div class="flex flex-col">
          <div class="text-xl ml-5 mt-4 text-blue-800 font-bold">
            {{ vaccineNameNormal }}
          </div>
          <div class="text-lg ml-5 mb-2">( {{ vaccineMedicalName }} )</div>
        </div>
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
    vaccineMedicalName: {
      type: String,
      required: true,
    },
    vaccineNameNormal: {
      type: String,
      required: true,
    },
    shortDes: {
      type: String,
      required: false,
    },
  },
  methods: {
    onCardClicked() {
      // alert("test clicking card id : " +this.vaccineId)
      this.$router.push({
        path: `/dashboard/vaccine/details/${this.vaccineId}`,
      });
    },
  },
};
</script>

<style lang="stylus" scoped></style>
