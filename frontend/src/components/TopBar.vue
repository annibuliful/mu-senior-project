<template>
  <div>
    <div class="flex flex-row justify-end ">
      <div @click="gotoNews()">
        <div class="mr-2  ">
          <img src="../assets/icons/news.svg" alt="" />
        </div>
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
