<template>
  <div>
    <div
      class="text-xl mb-5 border-b-2 border-blue-700 ml-2"
      style="width: fit-content;"
    >
      {{ labelText.roadmap }}
    </div>
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
    AppointmentCard,
  },
  data: function() {
    return {
      listEvents: [],
      childInfo: "",
    };
  },
  created: function() {
    const childId = this.$route.params.id;
    this.childInfo = this.$store.state.listFamilies.find(
      (el) => el.familyId === childId
    );

    service()
      .appointment.list()
      .then((data) => {
        this.listEvents = data
          .filter((el) => el.customData.childId === Number(childId))
          .map((el) => ({ ...el, date: format(el.dates, "dd/MM/yyyy") }));
      });
  },
  computed: {
    labelText() {
      return this.$store.state.locale.label;
    },
  },
};
</script>
