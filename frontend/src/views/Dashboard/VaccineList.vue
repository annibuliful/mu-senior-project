<template>
  <div>
    <div class="text-center">Search Components</div>
    <div v-for="item in vaccineList" :key="item.vaccineId">
      <VaccineCard
        :vaccineId="item.vaccineId"
        :vaccineNameMedical="item.vaccineNameMedical"
        :vaccineNameNormal="item.vaccineNameNormal"
        :shortDes="item.shortDes"
      ></VaccineCard>
    </div>
  </div>
</template>
<script>
import VaccineCard from "../../components/VaccineCard";
export default {
  components: {
    VaccineCard,
  },
  created() {
    console.log("Created", this.vaccineList);
  },
  data() {
    return {
      isOpenAddForm: false,
    };
  },
  computed: {
    vaccineList: function() {
      return this.$store.state.locale.vaccines;
    },
  },
  methods: {},
};
</script>
<style scoped>
@media only screen and (max-width: 900px) {
}
</style>
