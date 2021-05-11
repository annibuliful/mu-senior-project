<template>
  <div class="sm:mb-20 w-full">
    <!-- <TopBar></TopBar> -->
    <p class="text-2xl mb-10 border-b-2 border-orange-700">
      {{ localeText.home }}
      <!-- {{ welcomeWord }} {{ profileName.fullname ? profileName.fullname : "" }} -->
    </p>
    <Calendar :listEvents="listEvents" v-on:on-click="onSelectDate" />
    <br />
    <p class="text-xl mb-10 border-b-2 border-orange-700" v-if="selectedDate">
      {{ selectedDate }}
    </p>
    <p class="text-xl mb-10 border-b-2 border-orange-700" v-else>
      {{ localeText.recentActivity }}
    </p>
    <p
      class="text-xl text-center my-4 text-gray-600"
      v-if="filterEventOnDate.length === 0"
    >
      {{ localeText.noEvent }}
    </p>

    <!-- <router-link
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
    </router-link> -->

    <router-link
      v-for="({ customData, status, dates }, index) in filterEventOnDate"
      :key="`${index}-${customData.childname}`"
      :to="`/dashboard/family/summary/${customData.childId}`"
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
import service from "../../services";
import AppointmentCard from "@/components/AppointmentCard.vue";
// import TopBar from "@/components/TopBar.vue";
export default {
  data() {
    return {
      selectedDate: null,
      listEvents: [],
      filterEventOnDate: []
    };
  },
  components: { Calendar, AppointmentCard },
  created: function() {
    console.log("setAppBadge", navigator);

    service()
      .appointment.cronCheckStatus()
      .then(async () => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        this.$store.commit("setUserInfo", userInfo);
        const language = this.$store.state.calendarLocale;
        const data = await service().appointment.listNonDelete(
          language,
          userInfo.userId
        );
        this.listEvents = data;
        this.filterEventOnDate = this.listEvents.filter(
          event => event.status === "vaccinating"
        );

        this.$store.commit("changeSelectedCalendarDate", new Date());
      });
    // service()
    //   .appointment.getVaccinatingStatus(this.locale)
    //   .then(data => {
    //     if (navigator.setAppBadge) {
    //       navigator.setAppBadge(data.length);
    //     }
    //     if (Notification.permission === "granted") {
    //       // new Notification("Welcome to Vaccinet App");
    //       service().util.showNotification(data);
    //     }
    //   });
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
