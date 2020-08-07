<template>
  <div>
    <p class="text-2xl mb-10 border-b-2 border-blue-700" style="width: auto;">
      {{ familyword }}
    </p>
  </div>
</template>
<script>
export default {
  computed: {
    familyword() {
      return this.$store.state.locale.family;
    }
  }
};
</script>
