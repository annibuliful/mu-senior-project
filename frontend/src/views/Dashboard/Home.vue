<template>
  <div class="sm:mb-20">
    <TopBar></TopBar>
    <p class="text-2xl mb-10 border-b-2 border-blue-700">
      <!-- {{ welcomeWord }} {{ profileName.fullname ? profileName.fullname : "" }} -->
    </p>
    <Calendar :listEvents="listEvents" v-on:on-click="onSelectDate" />
    <br />
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-if="selectedDate">
      {{ selectedDate }}
    </p>
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-else>
      {{ localeText.recentActivity }}
    </p>
    <p
      class="text-xl text-center my-4 text-gray-600"
      v-if="filterEventOnDate.length === 0"
    >
      {{ localeText.noEvent }}
    </p>

    <router-link
      v-for="({ customData, appointmentId, status, dates },
      index) in filterEventOnDate"
      :key="`${index}-${customData.childname}`"
      :to="`/record-vaccine/${appointmentId}`"
    >
      <AppointmentCard
        :childname="customData.childname"
        :note="customData.note"
        :time="customData.time"
        :vaccines="customData.selectedVaccines"
        :status="status"
        :date="dates"
        :doseNumber="customData.doseNumber"
      />
    </router-link>

    <button
      class="rounded-full p-2 mt-8 mx-auto block border-2 border-black focus:outline-none"
      @click="onLinkToAddAppointmentPage"
    >
      <img :src="`${require('@/assets/icons/plus.svg')}`" class="w-6 h-6" />
    </button>
  </div>
</template>
<script>
import { format } from "date-fns";
import { th } from "date-fns/locale";
import Calendar from "@/components/Calendar.vue";
import service from "@/services";
import AppointmentCard from "@/components/AppointmentCard.vue";
import TopBar from "@/components/TopBar.vue";
export default {
  data() {
    return {
      selectedDate: null,
      listEvents: [],
      filterEventOnDate: []
    };
  },
  components: { Calendar, AppointmentCard, TopBar },
  created: function() {
    service()
      .appointment.cronCheckStatus()
      .then(async () => {
        const language = this.$store.state.calendarLocale;
        const data = await service().appointment.listNonDelete(language);
        this.listEvents = data;
        this.filterEventOnDate = this.listEvents.filter(
          event => event.status === "vaccinating"
        );
        const result = localStorage.getItem("userInfo");
        this.$store.commit("setUserInfo", JSON.parse(result));
        this.$store.commit("changeSelectedCalendarDate", new Date());
      });
  },
  methods: {
    onSelectDate: function(date) {
      this.filterEventOnDate = this.listEvents.filter(
        event =>
          format(event.dates, "dd/MM/yyyy") ===
          format(new Date(date), "dd/MM/yyyy")
      );
      this.selectedDate = format(new Date(date), "EEEE d MMMM, yyyy", {
        locale: this.locale === "th-TH" ? th : null
      });
      this.$store.commit("changeSelectedCalendarDate", date);
      // console.log("fdsfsfsf", this.filterEventOnDate);
    },
    onLinkToAddAppointmentPage: function() {
      this.$router.push({ name: "appointment-create" });
    }
  },
  computed: {
    locale() {
      return this.$store.state.calendarLocale;
    },
    localeText() {
      return this.$store.state.locale;
    },
    // profileName() {
    //   return this.$store.state.userInfo;
    // },
    welcomeWord() {
      return this.$store.state.locale.welcome;
    }
  }
};
</script>
