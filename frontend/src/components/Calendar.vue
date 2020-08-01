<template>
  <div class="w-full">
    <v-date-picker
      mode="range"
      :locale="locale"
      :attributes="listEvents"
      @dayclick="dayClicked"
      @drag="dragValue = $event"
      :value="listEvents"
      color="blue"
      is-inline
      is-expanded
    >
    </v-date-picker>
  </div>
</template>

<script>
export default {
  computed: {
    listEvents() {
      return this.$store.state.calendarEvents.map((t, index) => ({
        key: `todo.${index}`,
        dot: t.color,
        dates: t.date,
        customData: t
      }));
    },
    locale() {
      return this.$store.state.calendarLocale;
    }
  }
};
</script>
