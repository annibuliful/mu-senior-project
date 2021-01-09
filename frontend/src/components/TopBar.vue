<template>
  <div>
    <div class="flex flex-row justify-end ">
      <div
        class="border-l-2 border-r-2 border-blue-700 p-1 mr-2 my-auto"
        @click="gotoNews()"
      >
        News
      </div>
      <div class="mr-2  ">
        <img src="../assets/icons/notification.svg" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    locale: function() {
      return this.$store.state.locale;
    },
  },
  methods: {
    gotoNews() {
      this.$router.push({ name: "dashboard-news" });
    },
  },
};
</script>
