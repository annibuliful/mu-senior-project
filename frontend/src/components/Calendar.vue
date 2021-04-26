<template>
  <div class="w-full">
    <v-date-picker
      class="z-0"
      :locale="locale"
      :attributes="listEvents"
      @dayclick="dayClicked"
      :value="listEvents"
      color="blue"
      is-inline
      is-expanded
    >
      <!-- mode="range" -->

      <!-- @drag="dragValue = $event" -->
    </v-date-picker>
  </div>
</template>

<script>
export default {
  props: {
    listEvents: {
      type: Array,
      default: function() {
        return [];
      }
    }
  },
  methods: {
    dayClicked: function(day) {
      this.$emit("on-click", day.id);
    }
  },
  computed: {
    locale() {
      return this.$store.state.calendarLocale;
    }
  }
};
</script>
