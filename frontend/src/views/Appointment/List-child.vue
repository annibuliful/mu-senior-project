<template>
  <div class="mt-12 ">
    <div class="flex pl-4 justify-around items-center mb-8">
      <p class="w-16 h-16 rounded-full bg-gray-400"></p>
      <p class="font-bold text-2xl ">{{ childInfo.fullname }}</p>
    </div>
    <p class="font-bold text-xl border-b-2 border-blue-700 pl-4 mb-4">
      All Appointments
    </p>
    <AppointmentCard
      v-for="(appointment, index) in listEvents"
      :childname="appointment.date"
      :note="appointment.customData.note"
      :time="appointment.customData.time"
      :vaccines="appointment.customData.selectedVaccines"
      :key="`${index}-${appointment.customData.childname}`"
    />
  </div>
</template>
<script>
import service from "@/services";
import { format } from "date-fns";
import AppointmentCard from "@/components/AppointmentCard.vue";

export default {
  components: {
    AppointmentCard
  },
  data: function() {
    return {
      listEvents: [],
      childInfo: ""
    };
  },
  created: function() {
    const childId = this.$route.params.id;
    this.childInfo = this.$store.state.listFamilies.find(
      el => el.familyId === childId
    );

    service()
      .appointment.list()
      .then(data => {
        this.listEvents = data
          .filter(el => el.customData.childId === Number(childId))
          .map(el => ({ ...el, date: format(el.dates, "dd/MM/yyyy") }));
      });
  }
};
</script>
