<template>
  <div class="container">
    <p>{{ tempFamily }}</p>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="username"
        type="text"
        placeholder="Username"
      />
    </div>
    <div class="mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="received"
        value=""
      >
        เคยฉีด
      </label>
      <input
        id="received"
        type="radio"
        class="appearance-none checked:bg-blue-900 checked:border-transparent"
      />
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2" for="never">
        ไม่เคยฉีด
      </label>
      <input
        id="never"
        type="radio"
        class="appearance-none checked:bg-blue-900 checked:border-transparent"
      />
    </div>
  </div>
</template>
<script>
export default {
  props: {
    family: {
      type: String,
      required: true
    },
    vaccineId: {
      type: String
    },
    vaccineNameNormal: {
      type: String
    },
    vaccineNameMedical: {
      type: String
    }
  },
  data() {
    return {
      isReceivedVaccine: false,
      receiveDate: ""
    };
  },
  computed: {
    tempFamily: function() {
      return this.$store.state.tempFamily;
    }
  }
};
</script>
<style scoped>
.container {
  width: 80vh;
  margin: 0 auto;
}
</style>
