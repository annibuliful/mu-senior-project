<template>
  <div>
    <div :class="cardClass">
      <div
        class="card-container mt-2 shadow-md p-2 hover:border-gray-200 cursor-pointer"
      >
        <div class="flex flex-row">
          <img
            class="p-2 w-4/12 lg:w-48"
            :src="require(`../assets/vaccine-img/${vaccineId}.png`)"
            alt=""
          />
          <div class="flex flex-col">
            <div class="flex flex-row">
              <div
                class="text-xl md:text-2xl ml-5 mt-4 text-blue-800 font-bold"
              >
                {{ vaccineDetails.vaccineMedicalName }}
              </div>
              <div
                class="border-2 border-blue-800 ml-5 rounded-full h-16 w-16 flex items-center justify-center"
              >
                <span>{{ numberDoseReceived }}</span>
                <span>/</span>
                <span class="text-blue-800 font-bold text-lg">{{
                  vaccineDetails.injectionPeriodTime.length
                }}</span>
              </div>
            </div>

            <div class="text-base ml-5 mb-2">
              {{ vaccineDetails.vaccineNameNormal }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
// import { formatDistanceToNow } from "date-fns";
import service from "../services";
export default {
  data() {
    return {
      isReceived: true,
      vaccineDetails: "",
      numberDoseReceived: "",
      cardClass: ""
    };
  },
  async created() {
    this.$store.commit("getVaccineDetail", this.vaccineId);
    this.vaccineDetails = this.$store.state.selectedVaccineDetails;
    const data = await service().record.countRecordTime(
      this.childId,
      this.vaccineDetails.vaccineId
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
      required: true
    },
    childId: {
      type: Number,
      required: true
    }
  }
};
</script>
