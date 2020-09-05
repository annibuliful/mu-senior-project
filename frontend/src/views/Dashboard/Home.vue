<template>
  <div class="sm:mb-20">
    <p class="text-2xl mb-10 border-b-2 border-blue-700">
      {{ welcomeWord }}
    </p>
    <Calendar :listEvents="sampleEvents" v-on:on-click="onSelectDate" />
    <br />
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-if="selectedDate">
      {{ selectedDate }}
    </p>
    <p class="text-xl mb-10 border-b-2 border-blue-700" v-else>
      {{ recentActivity }}
    </p>
    <p
      class="text-xl text-center my-4 text-gray-600"
      v-if="listEvents.length === 0"
    >
      There is no any event
    </p>
    <AppointmentCard
      v-for="({ customData: { name, time, childname } }, index) in listEvents"
      :name="name"
      :time="time"
      :childname="childname"
      :key="`${index}-${name}`"
    />
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
import AppointmentCard from "@/components/AppointmentCard.vue";
export default {
  data() {
    return {
      selectedDate: null,
      listEvents: [],
      sampleEvents: [
        {
          key: "a",
          customData: {
            name: "bbbb",
            childname: "yyyy",
            time: "08:30"
          },
          dot: "red",
          dates: new Date()
        },
        {
          key: "b",
          customData: {
            name: "aaaa",
            childname: "xxxx",
            time: "18:30"
          },
          dot: "red",
          dates: new Date()
        }
      ]
    };
  },
  components: { Calendar, AppointmentCard },
  created: function() {
    this.listEvents = this.sampleEvents.filter(
      event =>
        format(event.dates, "MM/dd/yyyy") === format(new Date(), "MM/dd/yyyy")
    );
    this.$store.commit("changeSelectedCalendarDate", new Date());
  },
  methods: {
    onSelectDate: function(date) {
      this.listEvents = this.sampleEvents.filter(
        event =>
          format(event.dates, "MM/dd/yyyy") ===
          format(new Date(date), "MM/dd/yyyy")
      );
      this.selectedDate = format(new Date(date), "EEEE d MMMM, yyyy", {
        locale: this.locale === "th-TH" ? th : null
      });
      this.$store.commit("changeSelectedCalendarDate", date);
    },
    onLinkToAddAppointmentPage: function() {
      this.$router.push({ name: "appointment-create" });
    }
  },
  computed: {
    locale() {
      return this.$store.state.calendarLocale;
    },
    recentActivity() {
      return this.$store.state.locale.recentActivity;
    },
    profileName() {
      return this.$store.state.userInfo;
    },
    welcomeWord() {
      return this.$store.state.locale.welcome;
    }
  }
};
</script>
