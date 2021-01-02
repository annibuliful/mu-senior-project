<template>
  <div>
    <div
      class="card-container mt-2 shadow-md p-2 hover:border-gray-200 cursor-pointer"
      @click="onCardClicked"
    >
      <div class="flex flex-row">
        <img
          class="p-2 w-24 h-24 lg:w-48 lg:h-48"
          :src="require(`../assets/packager/${packageId}.png`)"
          alt=""
        />
        <div class="flex flex-col">
          <div class="text-xl ml-3 my-auto text-blue-800 font-bold">
            {{ packageDetails.packageTitle }}
          </div>
        </div>
      </div>

      <!-- <div class="text-base ml-5 mb-2">{{ packageSubTitle }}</div> -->
    </div>
  </div>
</template>
<script>
export default {
  props: {
    packageId: {
      type: String,
      required: true
    }
  },

  created() {
    this.$store.commit("getPackagerDetail", this.packageId);
  },
  computed: {
    packageDetails: function() {
      return this.$store.state.selectedPackagerDetails;
    }
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
