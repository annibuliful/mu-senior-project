<template>
  <div>
    <img
      :src="require(`../../assets/icons/arrow-left.svg`)"
      alt="left-arrow"
      class="p-2 w-2/12 lg:w-16 cursor-pointer"
      @click="$router.push('/pre-login')"
    />
    <div class="w-11/12 mx-auto lg:w-5/6 mb-10">
      <img
        class=" mt-2 mx-auto"
        :src="require(`../../assets/news/${newsDetails.newsId}.png`)"
        alt=""
      />

      <h1
        class="font-bold text-blue-700 mt-2 lg:text-center lg:text-3xl lg:mt-4"
      >
        {{ newsDetails.newsTitle }}
      </h1>
      <div
        class="mt-2 mb-4 lg:text-xl lg:mt-4 html-content"
        v-html="newsDetails.newsContent"
      ></div>
      <div>
        <div class="font-bold mr-2">{{ locale.label.ref }}</div>
        <a
          :href="newsDetails.newsReference"
          class="cursor-pointer text-blue-700 "
          >{{ newsDetails.newsReference }}</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit("getNewsDetail", this.$route.params.newsId);
  },
  computed: {
    locale: function() {
      return this.$store.state.locale;
    },
    newsDetails: function() {
      return this.$store.state.selectedNewsDetails;
    }
  }
};
</script>

<style scoped></style>
