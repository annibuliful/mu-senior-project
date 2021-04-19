<template>
  <div class="w-full">
    <p class="text-2xl mb-10 border-b-2 border-blue-700">
      {{ localeText.aboutUs }}
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    localeText() {
      return this.$store.state.locale;
    }
  }
};
</script>
