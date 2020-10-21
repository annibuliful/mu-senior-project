<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      Report
    </p>

    <div class="flex flex-col">
      <div class="text-center text-xl">{{ childInfo.fullname }}</div>
      <div class="text-center text-xl mb-4">Type: Children</div>
      <div class="text-center text-xl">Immunity Status</div>

      <div class="flex flex-row flex-wrap bg-gray-300 w-10/12 mx-auto">
        <div
          @click="showModal(vaccine.vaccineId)"
          class="w-1/5 bg-orange-500 border-gray-600"
          v-for="vaccine in vaccineList"
          :key="`${vaccine.vaccineId}`"
        >
          {{ vaccine.vaccineMedicalName }}
        </div>

        <!-- <Modal vaccineId="vac002" v-if="isModalVisible"  /> -->
        <Modal
          @close="closeModal()"
          :vaccineId="selectedVaccineId"
          v-if="isModalVisible"
        />
      </div>
    </div>
  </div>
</template>

<script>
// import service from "@/services";
import Modal from "../../components/common/Modal.vue";
export default {
  components: {
    Modal,
  },
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
  methods: {
    showModal(selectedVC) {
      this.selectedVaccineId = selectedVC;
      console.log(" this.selectVaccine 1", this.selectedVaccineId);
      this.isModalVisible = true;
    },
    closeModal() {
      console.log("SSSSS");
      this.isModalVisible = false;
    },
  },
};
</script>
