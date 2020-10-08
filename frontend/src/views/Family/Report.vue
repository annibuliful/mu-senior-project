<template>
  <div>
    report
  </div>
</template>

<script>
// import service from "@/services";
export default {
  created() {
    this.$store.commit("listRecords");
  },
  data() {
    return {
      displayedListRecord: [],
    };
  },
  computed: {
    listRecords() {
      return this.$store.state.listRecords;
    },
  },
  methods: {},
};
</script>
