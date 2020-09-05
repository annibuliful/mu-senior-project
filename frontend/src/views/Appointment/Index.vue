<template>
  <div></div>
</template>
<script>
export default {
  computed: {
    vaccineList: function() {
      return this.$store.state.locale.vaccines;
    }
  }
};
</script>
