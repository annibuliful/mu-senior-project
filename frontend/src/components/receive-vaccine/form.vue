<template>
  <div class="container">
    <p>{{ childName }}</p>
    <div class="w-full flex mx-auto md:w-2/4 lg:w-2/4 justify-evenly my-8">
      <div
        :class="[
          receiveStatus === 'received' ? 'border-blue-600' : 'border-gray-400'
        ]"
        class="p-6 m-2 border-2 pointer language-box"
        @click="onChangeReceiveStatus('received')"
      >
        <p class="text-gray-700 text-center my-6">เคยฉีด</p>
      </div>
      <div
        @click="onChangeReceiveStatus('never')"
        :class="[
          receiveStatus === 'never' ? 'border-blue-600' : 'border-gray-400'
        ]"
        class="p-6 m-2 border-2 pointer language-box"
      >
        <p class="text-gray-700 text-center my-6">ไม่เคยฉีด</p>
      </div>
    </div>
    <div class="my-4" v-if="receiveStatus === 'received'">
      <label class="block text-gray-700 text-sm font-bold mb-2 ">
        วันที่ฉีด
      </label>
      <v-date-picker v-model="receiveDate" :locale="calendarLocale" />
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    calendarLocale() {
      return this.$store.state.calendarLocale;
    }
  },
  props: {
    childName: {
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
      receiveStatus: "",
      receiveDate: ""
    };
  },
  methods: {
    onChangeReceiveStatus: function(status) {
      this.receiveStatus = status;
    }
  }
};
</script>
<style scoped>
.language-box {
  width: 8rem;
  height: 8rem;
  border-radius: 10px;
}
</style>
