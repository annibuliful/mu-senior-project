<template>
  <div class="container"></div>
</template>
<script>
export default {
  computed: {
    calendarLocale() {
      return this.$store.state.calendarLocale;
    }
  },
  props: {
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
