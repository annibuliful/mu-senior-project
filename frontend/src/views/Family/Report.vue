<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      Report
    </p>

    <div class="flex flex-col">
      <div class="text-center text-xl">{{ childInfo.fullname }}</div>

      <div class="text-center text-xl">Immunity Status</div>

      <div class="flex flex-row flex-wrap justify-center w-10/12 mx-auto">
        <div class="bg-gray-300 animate-bounce">LOGO 1</div>
        <div class="bg-gray-300">LOGO 2</div>
        <div class="bg-gray-300">LOGO 3</div>
        <div class="bg-gray-300">LOGO 4</div>
        <div class="bg-gray-300">LOGO 5</div>
      </div>
    </div>
  </div>
</template>

<script>
// import service from "@/services";
export default {
  created() {
    // this.$store.commit("listRecords");
    // this.$store.commit("listFamilies");
    this.childId = Number(this.$route.params.id);
    this.childInfo = this.$store.state.listFamilies.find(
      (el) => el.familyId === this.childId
    );
    console.log("ChildInfo", this.childInfo);
    console.log("vacc", this.vaccineList.length);
  },
  data() {
    return {
      childId: "",
      childInfo: {},
      displayedListRecord: [],
      isModalVisible: false,
      selectedVaccineId: "",
    };
  },
  computed: {
    listRecords() {
      return this.$store.state.listRecords;
    },
    vaccineList() {
      return this.$store.state.locale.vaccines;
    },
  },
  methods: {},
};
</script>
