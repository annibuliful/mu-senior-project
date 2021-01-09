<template>
  <div class="container">
    <ReceiveVaccineForm :childName="tempFamily.fullname" />
  </div>
</template>
<script>
import ReceiveVaccineForm from "@/components/receive-vaccine/Form";
export default {
  components: {
    ReceiveVaccineForm
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
  width: 80vw;
  margin: 10vh auto;
}
</style>
