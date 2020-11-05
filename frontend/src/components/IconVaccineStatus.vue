<template>
  <div>
    <div :class="cardClass">
      <div
        class="card-container mt-2  p-2 hover:border-gray-200 cursor-pointer"
      >
        <div class="flex flex-row">
          <img
            class="p-2 w-24 lg:w-48 opacity-50 relative"
            :src="require(`../assets/vaccine-img/${vaccineId}.png`)"
            alt=""
          />
          <div class="w-20 h-20 flex items-center justify-center absolute">
            <span>{{ numberDoseReceived }}</span>
            <span>/</span>
            <span class="text-blue-800 font-bold text-lg">{{
              vaccineDetails.injectionPeriodTime.length
            }}</span>
          </div>
        </div>
        <div class="text-xl ml-5  text-blue-800 font-bold ">
          {{ vaccineDetails.vaccineMedicalName }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { formatDistanceToNow } from "date-fns";
import service from "@/services";
export default {
  data() {
    return {
      isReceived: true,
      vaccineDetails: "",
      numberDoseReceived: "",
      cardClass: "",
    };
  },
  async created() {
    this.$store.commit("getVaccineDetail", this.vaccineId);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
    const data = await service().record.countRecordTime(
      this.childId,
      this.vaccineDetails.vaccineNameNormal
    );
    this.numberDoseReceived = data;

    const isComplete =
      this.numberDoseReceived ===
      this.vaccineDetails.injectionPeriodTime.length;

    if (isComplete) {
      this.cardClass = "bg-green-500";
    }
  },

  computed: {},
  props: {
    vaccineId: {
      type: String,
      required: true,
    },
    childId: {
      type: Number,
      required: true,
    },
  },
};
</script>
